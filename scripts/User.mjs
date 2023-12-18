// Imports
import ReplitDB from '../libs/ReplitDB/ReplitDB.mjs'

export class User {
    static id;

    constructor(name, id) {
        this.id = id;
        this.balance = {
            deposits: 0,
            winnings: 0
        }
        this.name = name;
        this.bet_ids = [];
    }

    /** 
    * @TODO Testing required
    * @param obj is a UserSet (class below) with
    * the following properties:
    *   {
    *       deposits: number,
    *       winnings: number,
    *       bets: [bets]
    *   }
    */
    addUserSet( userSet ){
        if(this.name == userSet.name){
            this.balance.deposits += userSet.deposits;
            this.balance.winnings += userSet.winnings;
            userSet.bets.forEach( (bet) => {
                this.bets.push(bet)
            })
        } else {
            throw new Error('User Mismatch: ' + 
                            'Name does not match the user' +
                            'at this index')
        }


    }


}

export class UserSet {
    /** 
     @summary
        This is a helper-class used for setting up users.
     */
    constructor( deposits, winnings, bet_id_array ){
        this.deposits = deposits;
        this.winnings = winnings;
        if (typeof bets === 'array'){
            this.bet_id.push(bets_id_array);
        } else {
            throw new Error('Invalid Argument Exception:\n' + 
                            'bets is not an array')
        }
    }
}

export class Bet {
    constructor( gameObj ) {
        this.price = 0.00;
        this.odds = gameObj.odds;
        this.game_id = gameObj.game_id;
        this.on_home_team = gameObj.on_home_team;
        this.eventDate = '';
    }

    getOdds(){
        return this.odds;
    }



}
