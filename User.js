// Imports
import jsbookieReplitDBFunctions from './jsbookieReplitDBFunctions.js';

const dbfn = new jsbookieReplitDBFunctions();

class User {

  constructor(name) {
    this.balance = {
      deposit: 0,
      winnings: 0
    };
    this.name = name;
    this.bets = [];
    this.id = 0;
  }

  /** 
  * @TODO Testing required
  * @param obj is an object with the following properties:
        {
            deposits: number,
            winnings: number,
            bets: [bets]
        }
  */
  set( obj ){

  }


  
  /** 
  * @TODO Testing required
  */
  purchase(bet) {

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

  odds(){
    
  }


  
}

export { User, Bet };