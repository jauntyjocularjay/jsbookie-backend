// Imports
import jsbookieReplitDBFunctions from './jsbookieReplitDBFunctions.js';

const dbfn = new jsbookieReplitDBFunctions();

class User {

  #user_id;

  constructor(name) {
    this.balance = {
      deposit: 0,
      winnings: 0
    };
    this.name = name;
    this.bets = [];
    this.setUserID();
  }

  setUserID() {
    dbfn.getRecord('users')
      .then((users) => {
        this.user_id = users.length;
      });
  }

  purchase(bet) {
    // @TODO User.purchase()

    this.bets.push(bet);
    this.bet_count++;

  }

}

class Bet {
  constructor(game_id, home_team) {
    this.price = 0.00;
    this.odds = 0.00;
    this.game_id = game_id;
    this.home_team = home_team;
    this.eventDate = '';
  }
}

export { User, Bet };