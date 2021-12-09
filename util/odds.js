const axios = require('axios')
const mongoose = require('mongoose')
const Game = require('../models/Game')

let offset = 540000; //the 9 hour diff between Cali and GMT 

const getGameOdds = () => {
  axios.get('https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&oddsFormat=american&markets=h2h&apiKey=a7d3e326ce38f60819fdd9bf02d954eb')
  .then( res => {
    for(let i = 0; i < res.data.length; i++){
      let odds_obj = {}; 
      if(144000000 > Date.parse(res.data[i].commence_time) + offset - Date.now() > 0){
        let odds = res.data; 
        odds_obj.start_time = odds[i].commence_time
        odds_obj.home_team = odds[i].home_team
        odds_obj.away_team = odds[i].away_team
        odds_obj.home_odds = odds[i].bookmakers[0].markets[0].outcomes[0].price
        odds_obj.away_odds = odds[i].bookmakers[0].markets[0].outcomes[1].price

        //Default values to be changed by balldontlie 
        odds_obj.status = "Incomplete"
        odds_obj.home_score = -1;
        odds_obj.away_score = -1;

        //If status is false, update game 
        //home team, away team, status
      Game.findOne({$and:[{home_team:`${odds[i].home_team}`}, {away_team: `${odds[i].away_team}`}, {status: "Incomplete"}]}).then(game => {
        if (game === null){
          let newGame = new Game(odds_obj)
          newGame.save()
        }else {
          if (game.status === "Incomplete"){
            game.home_odds = odds_obj.home_odds
            game.away_odds = odds_obj.away_odds
            game.save()
          }
        }
      })
      }

    }
  }
  )
}

module.exports = getGameOdds;




// {
//   games: [
//     {
//       start_time: '2021-12-07T00:10:00Z',
//       home_team: 'Charlotte Hornets',
//       away_team: 'Philadelphia 76ers',
//       odds_home: 250,
//       odds_away: -310
//     },