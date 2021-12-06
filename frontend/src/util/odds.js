

export const h2hOdds = () => (
  $.ajax({
    url: "https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&oddsFormat=american&markets=h2h&apiKey=a7d3e326ce38f60819fdd9bf02d954eb",
    method: "GET"
  })
)


export const spreadOdds = () => (
  $.ajax({
    url: "https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&oddsFormat=american&markets=spreads&apiKey=a7d3e326ce38f60819fdd9bf02d954eb",
    method: "GET"
  })
)
