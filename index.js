
import {api, request, sport} from './the-odds-api.js';
import {dbfn} from './dbfunctions.js';

api.debug = false;


// request.odds(sport.nhl);

dbfn.list();
let dbkey = sport.nhl.dbkey;
// dbfn.logRow(dbkey);
dbfn.logOdds(dbkey);

