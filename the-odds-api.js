import fetch from 'node-fetch';
import {dbfn} from './dbfunctions.js';

const api = {
  debug: false,
  debug_url: '',
  base_url : 'https://api.the-odds-api.com',
  regions : 'us',
  oddsFormat: 'decimal'
};

const sport = {
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
  nhl: {  // This is what gets passed in request.odds(desiredSport) as desiredSport
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
  odds: (desiredSport) => {
    
    let url = `${api.base_url}/v4/sports/${desiredSport.key}/odds/?apiKey=${process.env['api_key']}&regions=${api.regions}`;
    request.dbkey = desiredSport.dbkey;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => { 
        dbfn.set(request.dbkey, data);
        dbfn.logRow(request.dbkey);
      });

    request.dbkey = '';
  },
  
  dbkey: ''
  
};

export {
  api,
  request,
  sport
};
