import fetch from 'node-fetch';
import {dbfn} from './jsbookieDBFunctions.js';

const api = {
  debug: false,
  debug_url: '',
  base_url : 'https://api.the-odds-api.com',
  regions : 'us',
  oddsFormat: 'decimal'
};

const sport = { // This is what gets passed in request.odds(desiredSport) as desiredSport
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
    const url = `${api.base_url}/v4/sports/?apiKey=${apikey}&all=${bool}`;
    bool ? request.dbkey = 'sports' : request.dbkey = 'currentSports';

    fetch(url)
      .then((response) => response.json())
      .then((data) => { dbfn.set(request.dbkey, data) });

    request.reset()
  },
  
  allSports: () => {
    request.sports(true);
  },

  currentSports: () => {
    request.sports(false);
  },
  
  odds: (desiredSport) => {
    const apikey = process.env['api_key'];
    const url = `${api.base_url}/v4/sports/${desiredSport.key}/odds/?apiKey=${apikey}&regions=${api.regions}`;
    request.dbkey = desiredSport.dbkey;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => { dbfn.set(request.dbkey, data) });
    // Return request.dbkey to empty string.
    request.reset();
  },

  reset: () => {
    // reset request.dbkey to empty string.
    request.dbkey = '';
    console.log('request.dbkey reset');
    return true;
  },
  
  dbkey: ''
    
};

export {
  request,
  sport
}
