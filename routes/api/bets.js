const express = require("express");
const router = express.Router();
const User = require('../../models/User')
const Game = require('../../models/Game');
const e = require("express");
const Bet = require("../../models/Bet");
const mongoose = require("mongoose");

// router.get('/index', (req, res) => {
//   console.log(req.body)
//   Bet.find({user: req.body.userId}, (err, bets) => {
//     return res.json(bets)
//   })
// })

router.get('/index/:userId', (req, res) => { 
  let userId = req.params.userId
  Bet.find({user: userId}, (err, bets) => {
    return res.json(bets)
  })
})

router.delete('/bet/:betId', (req, res) => {
  Bet.findByIdAndUpdate(req.params.betId, (err, bet) => {
    if (!!err){
      return res.status(422).json({"msg": "Failded to delete bet"})
    } else {
      User.findById(bet.user, (err, user) => {
        if (!!err){
          return res.status(404).json({"msg": "Bet is pointing to a nonexistent user"})
        }
        user.currency += bet.amount
        user.save()
        return res.json({"currency": user.currency})
      })
    }
  })
})


router.post('/create', (req, res) => {
  //From fronted: selection, amount, game, user 
  // console.log(req.body.user)
  // let userObjectId = mongoose.Types.ObjectId(req.body.userId)
  // console.log(userObjectId)
  User.findById(req.body.userId, (err, user) => {
    //TODO: Need to check that game is Incomplete

    if (req.body.amount <= 0){
      return res.status(422).json({"msg": "User must bet at least 1 unit of currency"})
    }

    if (user.currency - req.body.amount > 0){
      let bet = {}
      bet.user = user;

      Game.findById(req.body.game, (err, game) => {
        if (game.status === 'Final' || game.status === 'In Progress'){
          return res.status(422).json({"msg": `game ${game.status}`})
        }

        bet.game = req.body.game; 
        bet.status = 'Incomplete'
        bet.amount = parseInt(req.body.amount);

        // set status 
        if (req.body.selection === "true"){
          selection = true;
        } else {
          selection = false; 
        }

        //caculate payout
        if (selection){
          bet.selection = game.home_team
          if (game.home_odds > 0){
            bet.payout = (game.home_odds/100) * bet.amount + bet.amount
          } else {
            bet.payout = (100/game.home_odds) * bet.amount * -1 + bet.amount
          }
        } else {
          bet.selection = game.away_team 
          if (game.away_odds > 0){
            bet.payout = (game.away_odds/100) * bet.amount + bet.amount
          } else {
            bet.payout = (100/game.away_odds) * bet.amount * -1 + bet.amount
          }
        }
        bet.payout = Math.floor(bet.payout)

        // deduct amount
        user.currency -= bet.amount
        user.save()

        //respond with the the made bet and the updated user 
        let newBet = new Bet(bet)
        newBet.save()
        return res.json({bet: newBet, user: user })
        
      })
    } else {
      //If it's not, respond with an error + message
      return res.status(422).json({msg: `${user.handle} bet ${req.body.amount - user.currency} too much`})
    }
  })
})


module.exports = router; 