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
    this.user_id;
    this.setUserID();

    console.log('user_id set as', this.user_id)
  }

  /** 
  * @TODO Testing required
  */
  addDeposit(number){
    console.log('Old balance:', this.balance.desposit)    
    this.balance.deposit += Number.number.toFixed(2);
    console.log('New balance:', this.balance.desposit)
  }

  /** 
  * @TODO Testing required
  */
  addWinnings(number){
    this.balance.winnings += number
  }

  /** 
  * @TODO Testing required
  */
  balance(){
    const balance = {
      deposit: this.balance.deposit,
      winnings: this.balance.winnings,
      total: this.balance.deposit + this.balance.winnings
    };

    return balance;
  }

  /** 
  * @TODO Testing required
  */
  setUserID() {
    dbfn.getRecord('users')
      .then((users) => {
        console.log('users.length =', users.length)
        this.user_id = users.length;
      });
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