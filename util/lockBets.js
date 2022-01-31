const Bet = require('../models/Bet')

const lockBets = (gameId) => {
 Bet.find({game: gameId}).then(bets => {
   if (!!bets){
     for(let i = 0; i < bets.length; i++){
       bets[i].status = "Game In Progress"
       bets[i].save()
     }
   } else {
    return 0
   }
   return 1
 })
}

module.exports = lockBets; 
