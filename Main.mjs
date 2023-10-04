// Imports
import BookieDB from './scripts/BookieDB.mjs';
import { sport, request } from './scripts/the-odds-api.mjs';
import { User, UserSet, Bet } from './scripts/User.mjs';

const db = new BookieDB();

function Main(isCycling) {
  const day = 86400000; // 24 hours in milliseconds
  const interval = 30 * 1000;

  if (typeof isCycling != 'boolean') {
    throw new Error('Parameter is not a boolean.');
  }

  if (isCycling) {
    setInterval(() => { Cycle() }, interval)
  } else {
    Playground();
  }
}

function Cycle() {
  // Cycling Code
}

function Playground() {

    // db.list().then( (keys) => {console.log(keys)} );
    
    request.allSports();
    // db.logRecord('sports');
    // Code to assist writing
    // db.setRecord('users', []);
    // const user = new User('Jadedrakerider');
    // const uset = new UserSet(3.14, 1.11, ['bet']);
    // console.log(user);

    // user.set(uset);
    // user.set(uset);
    // console.log(user);

    // db.addUser(user);
    // db.updateUser(0, user)
    
    // db.logRecord('users');
    // db.removeUser(0);
    // db.logRecord('users');
    // request.currentSports();
    
    // request.odds(sport.nba);
    // db.list();
    // db.logOdds(sport.nba);
    
    // db.logOdds(sport.nhl);
    // db.logRecord(sports);
    // db.logOdds(sport.nba);
    
    
}

export { Main };


