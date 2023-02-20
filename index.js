
import {api, sport} from './the-odds-api.js';
import {dbfn} from './dbfunctions.js';

api.debug = false;


// request.odds(sport.nhl);

// dbfn.listAll();
let dbkey = sport.nhl.dbkey;
// dbfn.logSport(dbkey);
dbfn.logOdds(dbkey);

