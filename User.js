// Imports
import { default as Bet } from './Bet.js';
import { default as jsbookieReplitDBFunctions } from './jsbookieReplitDBFunctions.js';

const dbfn = new jsbookieDBFunctions();

class User {

  #user_id;

  constructor(obj) {
    this.balance = {
      deposit: 0,
      winnings: 0
    };
    this.name = obj.name;
    this.bet_count = 0;
    this.bets = [];
    this.setUserID();
    console.log('User created.');
  }

  setUserID() {
    dbfn.getRecord('users')
      .then((users) => {
        this.#user_id = users.length;
      });
  }

  purchase() {
    // @TODO User.purchase()

    this.bet_count++;

  }

}

export { User as default };


