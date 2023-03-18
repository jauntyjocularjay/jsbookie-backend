// Imports
import {Bet} from './Bet.js';
import { jsbookieDBFunctions } from './jsbookieReplitDBFunctions.js';

const dbfn = new jsbookieDBFunctions();

export class User {

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


