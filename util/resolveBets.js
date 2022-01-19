const Bet = require("../models/Bet");
const mongoose = require('mongoose')
const User = require('../models/User');

const resolveBets = (gameId, winner) => {
  Bet.find({game: gameId}).then(bets => {
    
    for(let i = 0; i < bets.length; i++){
      if(bets[i].selection === winner){
        User.findById(bets[i].user).then(user => {
          user.currency += bets[i].payout 
          user.history.push({x: new Date(Date.now()), y: user.currency})
          user.save()
          bets[i].status = "Won"
          bets[i].save()          
        }) 
      } else {
        bets[i].status = "Lost"
        bets[i].save()
      }
    }
  })
}

module.exports = resolveBets; 