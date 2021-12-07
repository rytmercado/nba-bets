const axios = require('axios')
const mongoose = require('mongoose')
const Game = require('../models/Game')

const getGameResults = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = yyyy + '-' + mm + '-' + dd;
  axios.get(`https://balldontlie.io/api/v1/games?seasons[]=2022&seasons[]=2021&dates[]=${today}`)
  .then(res => {
    let data = res.data.data;
    let fullHomeName;
    let fullAwayName;
    let homeScore;
    let awayScore;
    let result;
    for(let i = 0; i < data.length; i++){
      
      fullHomeName = data[i].home_team.full_name 
      fullAwayName = data[i].visitor_team.full_name 
      homeScore = data[i].home_team_score 
      awayScore = data[i].visitor_team_score 

      homeScore = 100;
      if (data[i].status === 'Final'){
        result = result
      } else if (homeScore > 0) {
        result = "In Progress"; 
      } else {
        result = "Incomplete"
      }

      Game.findOne({$and: [{home_team: `${fullHomeName}`},{$or: [{status: "In Progress"}, {status: "Incomplete"}]}]})
      .then(game => {
        console.log(game)
        game.status = result;
        game.home_score = homeScore
        game.away_score = awayScore 
        game.save();
      })
      .catch(err => console.log(err))
    }
    
  })
}

module.exports = getGameResults