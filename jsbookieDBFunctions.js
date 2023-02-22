
import dbfn from './ReplitDBFunctions/dbFunctions.js'
import Database from '@replit/database';
const db = new Database();

dbfn.logOdds = (dbkey) => {
  db.get(dbkey)
    .then((games) => {
      games.forEach( (game) => {
        console.log(`Game: ${game.home_team} v. ${game.away_team}`);
        console.log(`Game ID:`, game.id)
        game.bookmakers.forEach( (bookmaker) => {
          console.log('Bookmaker:', bookmaker.title);
          bookmaker.markets.forEach( (market) => {
            market.outcomes.forEach( (outcome) => {
              console.log(`${outcome.name}: ${outcome.price}`);
            }); // outcome
              console.log('');
          }); // market
        }); // bookmaker
      }); // game
    }); // games
}

dbfn.logSports = () => {
  
}

export {dbfn};