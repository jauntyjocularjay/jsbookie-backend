// Import & Declare replit Database
import Database from '@replit/database';
const db = new Database();

const dbfn = {
  
  list: () =>{
    db.list()
      .then(keys => {
        keys.forEach( (dbkey) => {
          console.log(dbkey);
        });
      });
  }, 
  
  logRow: (dbkey) => {
    db.get(dbkey)
      .then( (value) => {
        console.log(`\n${dbkey} contains:\n`, value);
      });
  },

  logOdds: (dbkey) => {
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
  },
  
  delete: (dbkey) => {
    db.delete(dbkey)
      .then( () => {
        console.log(`deleted ${dbkey}`)
      });
  },

  deleteAll: () => {
    db.list().then( (dbkeys) => {
      dbkeys.forEach( (key) => {
        db.delete(key);
      });
      console.log("db key:values deleted");
    });
  },
  
  set: (dbkey, data) => {
    db.set(dbkey, data)
      .then( () => {
        console.log(`${dbkey} data logged.`);
        dbfn.logRow(dbkey);
      })
    
  },

  property: ''
}

export {dbfn};