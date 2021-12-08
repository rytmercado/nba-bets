const express = require("express");
const router = express.Router();
const BetSchema = require('../../models/bet')
const User = require('../../models/User')
const Game = require('../../models/game');
const e = require("express");
const Bet = require("../../models/bet");

router.post('/create', (req, res) => {
  //From fronted: selection, amount, game, user 
  //Find user 
  let user = User.findById(req.user)
  debugger
  //Caculate if bet is possible
  //TODO: Need to check that game is Incomplete
  if (user.currency - req.amount > 0){
    bet.user = user;
    let game = Game.findById(req.game)
    bet.game = game; 
    bet.status = 'Incomplete'
    bet.amount = req.amount;
    let bet = {};
    if (!!res.selection){
      bet.selection = game.home_team
      if (game.home_odds > 0){
        bet.payout = (game.home_odds/100) * amount + bet.amount
      } else {
        bet.payout = (100/game.home_odds) * amount * -1 + bet.amount
      }
    } else {
      bet.selection = game.away_team 
      if (game.away_odds > 0){
        bet.payout = (game.away_odds/100) * amount + bet.amount
      } else {
        bet.payout = (100/game.away_odds) * amount * -1 + bet.amount
      }
      bet.payout = Math.floor(bet.payout)
    }
    //TODO: update user's currency to subtract the amount wagered 
    user.currency -= bet.amount

    //does this work
    bet = new Bet(bet)
    user.save()
    bet.save()
  } else {
    //If it's not, respond with an error + message
    return res.status(422).json({msg: `${user.handle} bet ${req.amount - user.currency} too much`})
  }
  //If it is, caculate payout, set status, deduct amount, respond with the the made bet
})


module.exports = router; 