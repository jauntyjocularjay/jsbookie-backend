
import {request, sport} from './the-odds-api.js';
import {dbfn} from './jsbookieDBFunctions.js';

// api.debug = false;


// request.odds(sport.nhl);
// request.currentSports();

// request.dbkey;
// dbfn.list();
let dbkey = sport.nhl.dbkey;
dbfn.logRecord(dbkey);
dbfn.logOdds(dbkey);
