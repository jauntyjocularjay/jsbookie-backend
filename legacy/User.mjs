// Imports

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
    * @param obj is a UserSet (class below) with
    * the following properties:
    *   {
    *       deposits: number,
    *       winnings: number,
    *       bets: [bets]
    *   }
    */
    set( userSet ){
        if(this.name == userSet.name){
            this.balance.deposits += userSet.deposits;
            this.balance.winnings += userSet.winnings;
            userSet.bets.forEach( (bet) => {
                this.bets.push(bet);
            });
        } else {
            throw new Error('User Mismatch: ' + 
                            'Name does not match the user' +
                            'at this index');
        }


    }


}

class UserSet {
    constructor( deposits, winnings, bets ){
        this.deposits = deposits;
        this.winnings = winnings;
        if (typeof bets == 'array'){
            this.bets = bets;
        } else {
            throw new Error('Invalid Argument Exception:\n' + 
                            'bets is not an array')
        }
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

export { User, UserSet, Bet };