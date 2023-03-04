// Imports
import {dbfn} from './jsbookieDBFunctions.js';
import {sport, request} from './the-odds-api.js';
import {Bet, User} from './Bet.js';

// Duration parameters

function Main(isCycling){
  const day = 86400000; // 24 hours in milliseconds
  const interval = 30 * 1000;

  if(typeof isCycling != 'boolean'){
    throw new Error('Parameter is not a boolean.');
  }

  if(isCycling){
    setInterval( () => { cycle() }, interval )
  } else {
    Playground();
  }
}

function Cycle(){
  // Cycling Code
}

function Playground(){
  const user = new User("George");
  console.log('User:', user);
  // Code to assist writing
  // request.odds(sport.nhl);
  dbfn.logOdds(sport.nhl);
  // dbfn.logRecord(sport.nhl.dbkey);
}

export {Main};
