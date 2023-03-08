
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

dbfn.activeOnly = false;

dbfn.logSports = (activeOnly) => {
  /**
  @TODO finish logSports()
  */
  console.log('activeOnly ===', activeOnly)
  dbfn.activeOnly = activeOnly;
  console.log('dbfn.activeOnly ===', dbfn.activeOnly);
  
  
  db.get('sports')
    .then( (sports) => {
      console.log('entered then(sports)');
      console.log('ActiveOnly ===', dbfn.activeOnly);
      let activeSports = new Array();
      if (dbfn.activeOnly) {
        sports.forEach( (sport) => {
          console.log('Sport:\n', sport);
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
      // console.log('Sports:', sports)
      // 
    });
  
  dbfn.activeOnly = false;
}

dbfn.logAllSports = () => {
  // dbfn.logSports(false);
}

dbfn.logActiveSports = () => {
  dbfn.logSports(true);
}
  

export {dbfn};