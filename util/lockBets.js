const Bet = require('../models/Bet')

const lockBets = (gameId) => {
 Bet.find({game: gameId}).then(bets => {
   console.log(bets)
   if (!!bets){
     for(let i = 0; i < bets.length; i++){
       bets[i].status = "Game In Progress"
       bets[i].save()
       return 1
     }
   } else {
    return 0
   }
 })
}

module.exports = lockBets; 
