'use strict';
// Imports
import { getSports, getOdds } from './scripts/the-odds-api.mjs';
import { User, UserSet, Bet } from './scripts/User.mjs';
import ReplitDB from './libs/ReplitDB/ReplitDB.mjs'

const db = new ReplitDB()

function Main(isCycling) {
    const day = 86400000; // 24 hours in milliseconds
    const interval = 30 * 1000;
    
    if (isCycling) {
        setInterval(() => { Cycle() }, interval)
    } else {
        Playground();
    }
}

function Cycle() {
    // Cycling Code
}

async function Playground() {
    // db.setRecord('odds', new Array())
    db.logRecord('odds')
    // db.logRecord('odds')
    // const gameIDs = []
    // const games = await db.getRecord('odds')

    // games.forEach(game => {
    //     gameIDs.push(game.id)
    // })

    // console.log('GameIDs:', gameIDs)

    
    // const game = await db.getObjectFromArray('odds', 'id', 'f15ea9be5a09061ab1271a8740f13ab0')

    // game.bookmakers.forEach(bookmaker => {
    //     bookmaker.markets.forEach(market => {
    //         console.log(bookmaker.title, market.outcomes)
    //     })
    // })

}

export { Main };


