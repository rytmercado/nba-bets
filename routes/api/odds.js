import {h2hOdds, spreadOdds} from './util/odds.js'

let odds_obj = {};
let offset = 540000; //the 9 hour diff between Cali and GMT 
odds_obj.games = []

h2hOdds().then(odds => {
  for(let i = 0; i < odds.length; i++){
    if(Date.parse(odds[i].commence_time) + offset - Date.now() > 0){
      odds_obj.games.push({
        start_time: odds[i].commence_time,
        home_team: odds[i].home_team,
        away_team: odds[i].away_team
      })
      odds_obj.games[i].odds = []
      //taking first bookmakers odds rn 
      for(let j = 0; j < 1; j++){
        odds_obj.games[i].odds.push(odds[i].bookmakers[j].markets[0].outcomes)
      }
    }
  }
})


console.log(odds_obj)



