// Imports
import jsbookieReplitDBFunctions from './jsbookieReplitDBFunctions.js';

const dbfn = new jsbookieReplitDBFunctions();

class User {

  #user_id;

  constructor( name ){
    this.balance = {
      deposit: 0,
      winnings: 0
    };
    this.name = name;
    this.bet_count = 0;
    this.setUserID();
    console.log('User created.');
  }

  setUserID(){
    dbfn.getRecord('users')
      .then( (users) => {
        this.user_id = users.length;
      });
  }

  purchase(){
    // @TODO User.purchase()
    
    this.bet_count++;

  }

}

class Bet {
  constructor(game_id, purchaser){
    this.price = 0.00;
    this.odds = 0.00;
    this.game_id = game_id;
    this.home_team = true;
    this.eventDate = '';
    this.purchaser = purchaser;
  }
}

export {User, Bet};