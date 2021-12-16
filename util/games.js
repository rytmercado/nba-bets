const axios = require('axios')
const mongoose = require('mongoose')
const Bet = require('../models/Bet')
const Game = require('../models/Game')
const resolveBets = require('./resolveBets')

const getGameResults = () => {
  //GMT? 
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();


  
  today = yyyy + '-' + mm + '-' + dd;
  // console.log(today)
  axios.get(`https://balldontlie.io/api/v1/games?seasons[]=2021&dates[]=${today}`)
  .then(res => {
    let data = res.data.data;

    for(let i = 0; i < data.length; i++){
      let result = data[i].status;
      let fullHomeName = data[i].home_team.full_name 
      let fullAwayName = data[i].visitor_team.full_name 
      
      let homeScore = data[i].home_team_score 
      let awayScore = data[i].visitor_team_score 
      
      let gameTime = data[i].status

      // homeScore = 100;
      if (data[i].status === 'Final'){
        result = 'Final'
      } else if (homeScore > 0) {
        result = "In Progress"; 
      } else {
        result = "Incomplete"
      }
      
      Game.findOne({$and: [{home_team: `${fullHomeName}`},{$or: [{status: "In Progress"}, {status: "Incomplete"}]}]})
      .then(game => {
        console.log(game)
        console.log(fullHomeName)
        if(!!game) {
          // debugger 

          if (result === 'Final'){
            if(homeScore > awayScore){
              winner = fullHomeName
            } else {
              winner = fullAwayName
            }
            resolveBets(game._doc._id, winner)
          }


          game.status = result;
          game.home_score = homeScore
          game.away_score = awayScore 
          game.game_time = gameTime
  
          // console.log(game)
  
          game.save();
        } else {
          // //Doesn't work yet 
          // //BallDontLie data 
          // game.status = result;
          // game.home_score = homeScore
          // game.away_score = awayScore 

          // //Crossover with odds API
          // //These will corrupt the database if the APIs treat names diffrently 
          // game.home_team = fullHomeName
          // game.away_team = fullAwayName


          // //Placeholders for odds API
          // game.start_time = "Unknown"
          // game.home_odds = -1
          // game.away_odds = -1

          // //Use the schema 
          // let newGame = new Game(game)

          // newGame.save();

        }

      })
      .catch(err => console.log(err))
    }
    
  })
}

module.exports = getGameResults