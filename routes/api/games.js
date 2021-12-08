const express = require("express");
const router = express.Router();
const Game = require('../../models/Game')



router.get('/index', (req, res) => {
  Game.find().then(games => res.json(games))
})

module.exports = router;