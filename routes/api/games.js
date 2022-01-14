const express = require("express");
const router = express.Router();
const Game = require('../../models/Game')

//index, show

const isToday = (someDate) => {
  const today = new Date()
  someDate = new Date(someDate)
  return (someDate.getDate() == today.getDate() && someDate.getMonth() == today.getMonth() && someDate.getFullYear() == today.getFullYear());
}

router.get('/index', (req, res) => {
  Game.find().then(games => {
    console.log(games)
    const todaysGames = games.filter(game => isToday(game.start_time))
    return res.json(todaysGames)
  })
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