
import ReplitDB from '../libs/ReplitDB/ReplitDB.mjs';

export default class BookieDB extends ReplitDB {

    constructor(){
        super();
    }
    
    logOdds( sport ){
    this.get(sport.dbkey)
      .then((games) => {
        games.forEach( (game) => {
          console.log(`Game: ${game.home_team} v. ${game.away_team}`);
          console.log(`Game ID:`, game.id, '\n')
          game.bookmakers.forEach( (bookmaker) => {
            console.log('-Bookmaker:', bookmaker.title);
            bookmaker.markets.forEach( (market) => {
              market.outcomes.forEach( (outcome) => {
                console.log(`  ${outcome.name}: ${outcome.price}`);
              }); // outcome
              console.log(''); 
           // Log an empty line for formatting logs.
            }); // market
          }); // bookmaker
          console.log('\n'); // Log empty lines for formatting logs.
        }); // game
      }); // games
}
    
    #logSports( activeOnly ){
    
        this.get('sports')
          .then( (sports) => {
            let activeSports = new Array();
            if (activeOnly) {
              sports.forEach( (sport) => {
                if (sport.active) {
                  activeSports.push(sport);
                }
              });
              return activeSports;
            } else {
              return sports;
            }
          })
          .then( (sports) => {
            console.log('Sports:', sports)
          });
        
        this.reset();
    }
    
    logAllSports(){
        this.#logSports(false);
    }
    
    logActiveSports(){
        this.#logSports(true);
    }

    updateSports(){
        // @todo finish this
    }
    
    addUser( user ){
    // @TODO add users to database
        this.get('users')
            .then( (users) => { // users is an array
                console.log('Users:', users);
                users.push(user);
                this.setRecord('users', users);
                return user;
            } );
  }

    updateUser( index, user ){
        this.get('users')
            .then((users) => {
                users[index] = user;
            })
            .then((users) => {
                this.setRecord('users', users);
                return true;
            })
            .then((success) => {
                // Code Here
                console.log('Update User Successful:', success)
            })
    }
}


