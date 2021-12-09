const Bet = require("../models/Bet");
const mongoose = require('mongoose')
const User = require('../models/User');

const resolveBets = (gameId, winner) => {
  let gameIdObjectId = new ObjectId(gameId)
  Bet.find({game: gameIdObjectId}).then(bets => {
    for(let i = 0; i < bets.length; i++){
      if(bets[i].selection === winner){
        let UserObjectId = new ObjectId(bets[i].user)
        User.findById(UserObjectId).then(user => {
          user.currency += bets[i].payout 
          user.save()
        })
      }
      bets[i].status = "Complete"
      bets[i].save()
    }
  })
}

module.exports = resolveBets; 