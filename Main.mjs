'use strict';
// Imports
import { getSports, getOdds } from './scripts/the-odds-api.mjs';
import { User, UserSet, Bet } from './scripts/User.mjs';
import ReplitDB from './libs/ReplitDB/ReplitDB.mjs'

const db = new ReplitDB()

function Main(isCycling) {
    const day = 86400000; // 24 hours in milliseconds
    const thirty = 30;
    const seconds = 1000;
    
    if (isCycling) {
        setInterval(() => { Cycle() }, thirty * seconds)
    } else {
        Playground();
    }
}

function Cycle() {
    // Cycling Code
}

async function Playground() {
    // Code Testings
    
}

export { Main };


