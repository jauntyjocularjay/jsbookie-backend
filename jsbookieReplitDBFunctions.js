
import ReplitDBFunctions from './ReplitDBFunctions/ReplitDBFunctionsClass.js';

import Database from '@replit/database';
const db = new Database();

class jsbookieReplitDBFunctions extends ReplitDBFunctions {

  constructor(){
    super();
    this.activeOnly = false;
  }

  logOdds(sport){
    db.get(sport.dbkey)
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
              console.log(''); // Log an empty line for formatting logs.
            }); // market
          }); // bookmaker
          console.log('\n'); // Log empty lines for formatting logs.
        }); // game
      }); // games
  }

  logSports(activeOnly){
    /**
    @TODO finish logSports()
    */
    this.activeOnly = activeOnly;
    
    
    db.get('sports')
      .then( (sports) => {
        let activeSports = new Array();
        if (this.activeOnly) {
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
        // 
      });
    
    this.activeOnly = false;
  }

  logAllSports(){
    this.logSports(false);
  }

  logActiveSports(){
    this.logSports(true);
  }
  
}

export {jsbookieReplitDBFunctions as default};