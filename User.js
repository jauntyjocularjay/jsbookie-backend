// Imports
import jsbookieReplitDBFunctions from './jsbookieReplitDBFunctions.js';

const dbfn = new jsbookieReplitDBFunctions();

class User {

    constructor(name) {
        this.balance = {
            deposits: 0,
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
    this.balance.deposits += obj.deposits;
    this.balance.winnings += obj.winnings;
    obj.bets.forEach( (bet) => {
        this.bets.push(bet);
    } );
}



}

class Bet {
    constructor(game_id, bet_on_home_team) {
        this.price = 0.00;
        this.odds = 0.00;
        this.game_id = game_id;
        this.bet_on_home_team = bet_on_home_team;
        this.eventDate = '';
    }

    odds(){
    
    }



}

export { User, Bet };