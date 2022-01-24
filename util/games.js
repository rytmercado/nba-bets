const axios = require('axios')
const mongoose = require('mongoose')
const Bet = require('../models/Bet')
const Game = require('../models/Game')
const resolveBets = require('./resolveBets')
const lockBets = require('./lockBets')

const getGameResults = () => {
  //GMT? 
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();


  
  today = yyyy + '-' + mm + '-' + dd;

  axios.get(`https://balldontlie.io/api/v1/games?seasons[]=2021&dates[]=${today}`)
  .then(res => {
    let data = res.data.data;

    for(let i = 0; i < data.length; i++){
      let result = data[i].status;
      let fullHomeName = data[i].home_team.full_name 
      let fullAwayName = data[i].visitor_team.full_name 


      //LA Clippers are the only known team to have a diffrent name
      //across APIs 
      if (fullHomeName === "LA Clippers"){
        fullHomeName = "Los Angeles Clippers"
      } else if (fullAwayName === "LA Clippers"){
        fullAwayName = "Los Angeles Clippers"
      }
      
      let homeScore = data[i].home_team_score 
      let awayScore = data[i].visitor_team_score 
      
      let gameTime = data[i].status
      let q = data[i].period
      let minute = data[i].time

      if (data[i].status === 'Final'){
        result = 'Final'
      } else if (homeScore > 0) {
        result = "In Progress"; 
      } else {
        result = "Incomplete"
      }
      
      Game.findOne({$and: [{home_team: `${fullHomeName}`},{away_team: `${fullAwayName}`}, {$or: [{status: "In Progress"}, {status: "Incomplete"}]}]})
      .then(game => {
        if(!!game) {
          if (result === 'Final'){
            if(homeScore > awayScore){
              winner = fullHomeName
            } else {
              winner = fullAwayName
            }
            resolveBets(game._doc._id, winner)
          } else if (homeScore + awayScore > 0) {
            lockBets(game._doc._id); 
          }


          game.status = result;
          game.home_score = homeScore
          game.away_score = awayScore 
          game.game_time = gameTime
          game.quarter = q
          game.game_minute = minute
  
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