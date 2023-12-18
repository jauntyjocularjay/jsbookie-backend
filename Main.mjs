'use strict';
// Imports
import { getSports, getOdds, getOddsByKey } from './scripts/the-odds-api.mjs';
import { User, UserSet, Bet } from './scripts/User.mjs';
import ReplitDB from './libs/ReplitDB/ReplitDB.mjs'

const db = new ReplitDB()
const isCycling = false;

export function Main(isCycling) {
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
    // const sports = await db.getRecord('sports')
    // const odds = await db.getRecord('odds')

    // console.log('sports:', sports)
    await getOdds()
    

    // console.log('sports:', sports)
    // console.log('odds:', odds)
}



