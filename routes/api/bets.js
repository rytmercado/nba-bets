const express = require("express");
const router = express.Router();
const User = require('../../models/User')
const Game = require('../../models/Game');
const e = require("express");
const Bet = require("../../models/Bet");
const mongoose = require("mongoose");

//index, delete, create

router.get('/index/:userId', (req, res) => { 
  let userId = req.params.userId
  Bet.find({user: userId}, (err, bets) => {
    return res.json(bets)
  })
})

router.get('/games/index/:gameId', (req, res) => {
  let gameId = req.params.gameId
  Bet.find({game: gameId}, (err, bets) => {
    return res.json(bets)
  })
})

router.delete('/:betId', (req, res) => {
  console.log(req.params.betId)
  Bet.findByIdAndDelete(req.params.betId, (err, bet) => {
    console.log(bet)
    if(bet === null){
      return res.status(404).json({"msg": "bet already deleted"})
    }
    if (!!err){
      return res.status(422).json({"msg": "Failed to delete bet"})
    } else {
      User.findById(bet.user, (err, user) => {
        if (!!err){
          return res.status(404).json({"msg": "Bet is pointing to a nonexistent user, Bet deleted"})
        }
        Game.findById(bet.game, (err, game) => {
          if(!!game){
            if(game.status === "Incomplete"){
              if (bet.status === "Incomplete"){
                user.currency += bet.amount
                user.save()
                return res.json({user, bet})
              } else {
                return res.json({"msg": "Bet was already resolved. Bet deleted"})
              }
            } else {
              bet.save()
              return res.status(422).json({"msg": "Game is in progress or concluded. Bet not deleted."})
            }
          } else {
            return res.status(404).json({"msg": "Bet is refrencing a non-existent game. Bet deleted."})
          }
        })
      })
    }
  })
})


router.post('/create', (req, res) => {
  //From fronted: selection, amount, game, user 
  // console.log(req.body.user)
  // let userObjectId = mongoose.Types.ObjectId(req.body.userId)
  // console.log(userObjectId)
  console.log(req.body.userId)
  if (typeof req.body.userId === 'undefined' ){
    return res.status(404).json({"msg":"userId is undefined"})
  }
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
        return res.json({bet: newBet, user: user,  "msg": "bet succesfully saved!"})
        
      })
    } else {
      //If it's not, respond with an error + message
      // return res.status(422).json({msg:`${user.handle} bet ${req.body.amount - user.currency} too much`})
    return res.status(422).json(`${user.handle} bet ${req.body.amount - user.currency} too much`)
    }
  })
})


module.exports = router; 