
import dbfn from './ReplitDBFunctions/ReplitDBFunctions.js';

import Database from '@replit/database';
const db = new Database();


dbfn.logOdds = (sport) => {
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

dbfn.logSports = (activeOnly) => {
  /**
  @TODO finish logSports()
  */
  dbfn.activeOnly = activeOnly;
  
  db.get('sports')
    .then( (sports) => {
      let array = new Array();
      if (dbfn.activeOnly) {
        sports.foreach( (sport) => {
          if (sport.active) {
            array.push(sport);
          }
        }
        return array;
      } else {
        return sports;
      }
    })
    .then( (sports) => {
      
    });
  
  dbfn.activeOnly = false;
}

export {dbfn};