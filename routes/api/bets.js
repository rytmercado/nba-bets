const express = require("express");
const router = express.Router();
const User = require('../../models/User')
const Game = require('../../models/Game');
const e = require("express");
const Bet = require("../../models/Bet");

//index for a given user 
router.get('/index', (req, res) => {
  Bet.find({user: req.body.userId}, (err, bets) => {
    return res.json(bets)
  })
})

router.post('/create', (req, res) => {
  //From fronted: selection, amount, game, user 

  User.findById(req.body.userId, (err, user) => {

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

        if (req.body.selection === "true"){
          selection = true;
        } else {
          selection = false; 
        }

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
        user.currency -= bet.amount


        let newBet = new Bet(bet)
        user.save()
        newBet.save()


        return res.json({bet: newBet})
      })
    } else {
      //If it's not, respond with an error + message
      return res.status(422).json({msg: `${user.handle} bet ${req.body.amount - user.currency} too much`})
    }
    //If it is, caculate payout, set status, deduct amount, respond with the the made bet
  })
})


module.exports = router; 