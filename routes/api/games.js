const express = require("express");
const router = express.Router();
const Game = require('../../models/Game')

//index, show

router.get('/index', (req, res) => {
  Game.find().then(games => res.json(games))
})

router.get('/:gameId', (req, res) => {
  Game.findById(req.params.gameId, (err, game) => {
    if (!!game){
      return res.json(game)
    } else{
      return res.status(404).json({"msg": "Game not found"})
    }
  })
})

module.exports = router;