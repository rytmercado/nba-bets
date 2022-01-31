const BrokenGame = require("../models/BrokenGame");
const Game = require("../models/Game");
const mongoose = require('mongoose')
const getGameOdds = require('./util/odds')
const getGameResults = require('./util/games')

const FindAndMoveOddGames = () => {
  Game.find().then(games => {
    for(let i = 0; i < games.length; i++){
      let game = games[i];
      let description = "";
      if (game.status !== "Final"){
        description += "Game status not final."
      } else if (game.home_score === -1 || game.away_score === -1){
        description += "Score is at -1."
      }
    } 
  })
}

export default FindAndMoveOddGames; 