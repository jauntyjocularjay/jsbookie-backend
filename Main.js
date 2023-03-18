// Imports
import jsbookieReplitDBFunctions from './jsbookieReplitDBFunctions.js';
import { sport, request } from './the-odds-api.js';
import User from './User.js';
import Bet from './Bet.js';

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
    // Playground();
  }
}

function Cycle() {
  // Cycling Code
}

function Playground() {
  // Code to assist writing
  // dbfn.setRecord('users', []);
  const my_user = new User('jadedrakerider');
  dbfn.addUser(my_user);
  dbfn.logRecord('users');

  console.log('User.');
  // dbfn.logAllSports();

}

export { Main };
