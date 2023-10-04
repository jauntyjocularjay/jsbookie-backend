import fetch from 'node-fetch';
import BookieDB from './BookieDB.mjs';

const db = new BookieDB()
const base_url = 'https://api.the-odds-api.com';
const region = { us:'us'}

const sport = {
    /**
    * @summary 
    * This is what gets passed in request.odds(desiredSport)
    * as desiredSport
    */
    ncaa: {
        dbkey: 'ncaa',
        key: 'americanfootball_ncaaf',
        has_outrights: false
    },
    nfl: {
        dbkey: 'nfl',
        key: 'americanfootball_nfl',
        has_outrights: false
    },
    mlb: {
        dbkey: 'mlb',
        key: 'baseball_mlb',
        has_outrights: false
    },
    nba: {
        dbkey: 'nba',
        key: 'basketball_nba',
        has_outrights: false
    },
    nhl: {
        dbkey: 'nhl',
        key: 'icehockey_nhl',
        has_outrights: false
    },
    mma: {
        dbkey: 'mma',
        key: 'mma_mixed_martial_arts',
        has_outrights: false
    },
    eu_football: {
        dbkey: 'eu_football',
        key: 'soccer_uefa_european_championship',
        has_outrights: false
    },
    us_soccer: {
        dbkey: 'us_soccer',
        key: 'soccer_usa_mls',
        has_outrights: false
    }
};

const request = {
    sports: (bool) => {
        const apikey = process.env['api_key'];
        const url = `${base_url}/v4/sports/` +
            `?apiKey=${apikey}&all=${bool}`;

        console.log('GET:', url);

        /** 
        * @todo
        *     Ensure this is no longer needed - 
        *     BookieDB has functions to return
        *     all or current sports.
        */
        // bool 
        //     ? request.dbkey = 'sports' 
        //     : request.dbkey = 'currentSports';

        request.dbkey = 'sports';

        fetch(url)
            .then((response) => {
                response.json();
                request.logResponse(response);
            })
            .then((data) => {
                if (bool) {
                    db.setRecord(request.dbkey, data);
                } else {
                    db.updateSports();
                }
            });

        request.reset();
    },

    allSports: () => {
        request.sports(true);
    },

    currentSports: () => {
        request.sports(false);
    },

    odds: (desiredSport) => {
        const apikey = process.env['api_key'];
        const url =
            `${base_url}/v4/sports/${desiredSport.key}` +
            `/odds/?apiKey=${apikey}&regions=${region.us}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                db.setRecord(desiredSport.dbkey, data)
            });
    },

    logResponse: (response) => {
        if (response.status >= 200 || response.status < 300) {

            console.log(response.status, ': ', response.statusText);

        } else {

            throw new Error('API Error\n' +
                `  ${response.status}: ${response.statusText}`);

        }
    },

    reset() {
        request.dbkey = '';
    },

    dbkey: ''

};

export {
    request,
    sport
}
