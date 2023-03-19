// Imports
import jsbookieReplitDBFunctions from './jsbookieReplitDBFunctions.js';
import { sport, request } from './the-odds-api.js';
import { User, Bet } from './User.js';

const dbfn = new jsbookieReplitDBFunctions();

function Main(isCycling) {
  const day = 86400000; // 24 hours in milliseconds
  const interval = 30 * 1000;

  if (typeof isCycling != 'boolean') {
    throw new Error('Parameter is not a boolean.');
  }

  if (isCycling) {
    setInterval(() => { cycle() }, interval)
  } else {
    Playground();
  }
}

function Cycle() {
  // Cycling Code
}

function Playground() {
  // Code to assist writing
  // dbfn.setRecord('users', []);
  const user = new User('Jadedrakerider');
  console.log(user);
  // dbfn.addUser(user);
  // dbfn.removeUser(0);
  // dbfn.logRecord('users');
  // request.currentSports();

  // request.odds(sport.nba);
  // dbfn.list();
  // dbfn.logOdds(sport.nba);
  
  // dbfn.logOdds(sport.nhl);
  // dbfn.logRecord(sports);
  // dbfn.logOdds(sport.nba);
  

}

export { Main };


