const axios = require('axios')
const mongoose = require('mongoose')
const Game = require('../models/Game')

//the 9 hour diff between Cali and GMT in milliseconds 
//1000 * 60 * 60 * 8

let offset = 28800000; 

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

        //Iterates over odds for all the bookmakers and assigns the average
        //to the odds_obj 
        let home_oddsSum = 0;
        let away_oddsSum = 0; 

        for (let j = 0; j < odds[i].bookmakers.length; j++){
          home_oddsSum += odds[i].bookmakers[j].markets[0].outcomes[0].price
          away_oddsSum += odds[i].bookmakers[j].markets[0].outcomes[1].price
        }

        odds_obj.home_odds = Math.floor(home_oddsSum / odds[i].bookmakers.length)
        odds_obj.away_odds = Math.floor(away_oddsSum / odds[i].bookmakers.length)

        //Default values to be changed by balldontlie 
        odds_obj.status = "Incomplete"
        odds_obj.home_score = -1;
        odds_obj.away_score = -1;

        odds_obj.game_time = " "
        odds_obj.game_minute = " "
        odds_obj.quarter = " "


        //If status is false, update game 
        //home team, away team, status
        Game.findOne({$and:[{home_team:`${odds[i].home_team}`}, {away_team: `${odds[i].away_team}`}]}).then(game => {

          console.log(game)

          if (game === null){

            let newGame = new Game(odds_obj)

            newGame.save()

          } else {
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