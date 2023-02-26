// Imports
import {dbfn} from './jsbookieDBFunctions.js';
import {sport, request} from './the-odds-api.js';

// Duration parameters

function main(isCycling){
  // const day = 86400000; // 24 hours in milliseconds
  const interval = 30 * 1000;

  if(typeof isCycling != 'boolean'){
    throw new Error('Parameter is not a boolean.');
  }

  if(isCycling){
    setInterval( () => { cycle() }, interval )
  } else {
    playground();
  }
}

function cycle(){
  // Cycling Code
}

function playground(){
  // Code to assist writing
  dbfn.logOdds(sport.nhl);
}

export {main};
