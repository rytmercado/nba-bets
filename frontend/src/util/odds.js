const axios = require('axios')

let odds_obj = {};
let offset = 540000; //the 9 hour diff between Cali and GMT 
odds_obj.games = []

axios.get('https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&oddsFormat=american&markets=h2h&apiKey=a7d3e326ce38f60819fdd9bf02d954eb').then( res => {
  for(let i = 0; i < res.data.length; i++){
    if(Date.parse(res.data[i].commence_time) + offset - Date.now() > 0){
      let odds = res.data; 
      odds_obj.games.push({
        start_time: odds[i].commence_time,
        home_team: odds[i].home_team,
        away_team: odds[i].away_team
      })
      odds_obj.games[i].home_odds = odds[i].bookmakers[0].markets[0].outcomes[0].price
      odds_obj.games[i].away_odds = odds[i].bookmakers[0].markets[0].outcomes[1].price
    }
  }
  console.log(odds_obj)
}
)
