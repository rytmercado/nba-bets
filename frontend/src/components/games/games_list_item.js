import React from 'react';
import * as NBAIcons from 'react-nba-logos';
import { Link } from 'react-router-dom';

class GamesListItem extends React.Component {
    constructor(props) {
        super(props);

    }


    nameshortener (name) {
        const NBA = {
            "Atlanta Hawks": "ATL",
            "Boston Celtics": "BOS",
            "Brooklyn Nets": "BKN",
            "Charlotte Hornets": "CHA",
            "Chicago Bulls": "CHI",
            "Cleveland Cavaliers": "CLE",
            "Dallas Mavericks": "DAL",
            "Denver Nuggets": "DEN",
            "Detroit Pistons": "DET",
            "Golden State Warriors": "GSW",
            "Houston Rockets": "HOU",
            "Indiana Pacers": "IND",
            "Los Angeles Clippers": "LAC",
            "Los Angeles Lakers": "LAL",
            "Memphis Grizzlies": "MEM",
            "Miami Heat": "MIA",
            "Milwaukee Bucks": "MIL",
            "Minnesota Timberwolves": "MIN",
            "New Orleans Pelicans": "NOP",
            "New York Knicks": "NYK",
            "Oklahoma City Thunder": "OKC",
            "Orlando Magic": "ORL",
            "Philadelphia 76ers": "PHI",
            "Phoenix Suns": "PHX",
            "Portland Trail Blazers": "POR",
            "Sacramento Kings": "SAC",
            "San Antonio Spurs": "SAS",
            "Toronto Raptors": "TOR",
            "Utah Jazz": "UTA",
            "Washington Wizards": "WAS"
        }
        return NBA[name];
    }

    render() {
        const game = this.props.game
        const NBALogos = {
            "Atlanta Hawks": <NBAIcons.ATL/>,
            "Boston Celtics": <NBAIcons.BOS/>,
            "Brooklyn Nets": <NBAIcons.BKN/>,
            "Charlotte Hornets": <NBAIcons.CHA/>,
            "Chicago Bulls": <NBAIcons.CHI/>,
            "Cleveland Cavaliers": <NBAIcons.CLE/>,
            "Dallas Mavericks": <NBAIcons.DAL/>,
            "Denver Nuggets": <NBAIcons.DEN/>,
            "Detroit Pistons": <NBAIcons.DET/>,
            "Golden State Warriors": <NBAIcons.GSW/>,
            "Houston Rockets": <NBAIcons.HOU/>,
            "Indiana Pacers": <NBAIcons.IND/>,
            "Los Angeles Clippers": <NBAIcons.LAC/>,
            "Los Angeles Lakers": <NBAIcons.LAL />,
            "Memphis Grizzlies": <NBAIcons.MEM/>,
            "Miami Heat": <NBAIcons.MIA/>,
            "Milwaukee Bucks": <NBAIcons.MIL/>,
            "Minnesota Timberwolves": <NBAIcons.MIN/>,
            "New Orleans Pelicans": <NBAIcons.NOP/>,
            "New York Knicks": <NBAIcons.NYK/>,
            "Oklahoma City Thunder": <NBAIcons.OKC/>,
            "Orlando Magic": <NBAIcons.ORL/>,
            "Philadelphia 76ers": <NBAIcons.PHI/>,
            "Phoenix Suns": <NBAIcons.PHX/>,
            "Portland Trail Blazers": <NBAIcons.POR/>,
            "Sacramento Kings": <NBAIcons.SAC/>,
            "San Antonio Spurs": <NBAIcons.SAS/>,
            "Toronto Raptors": <NBAIcons.TOR/>,
            "Utah Jazz": <NBAIcons.UTA/>,
            "Washington Wizards": <NBAIcons.WAS/>
        }
        if (game) {
            let h_odds;
            let a_odds;
            if(game.home_odds > 0){
                h_odds = "+" + game.home_odds ;
            } else {
                h_odds = game.home_odds;
            }
            if(game.away_odds > 0){
                a_odds = "+" + game.away_odds;
            } else {
                a_odds = game.away_odds;
            }
            if (game.status === "Incomplete") {
                const gameTime = game.game_time;
                let time;
                    if (gameTime.length < 2) {
                        time = "Bets Locked"
                    } else {
                        time = gameTime;
                    }
                    return (
                        <Link to={`/game/show/${game._id}`}><div className="game-block">
                                <div className="game-block-row">
                                    <strong className="gametime">{time}</strong>
                                </div>
                                <div className="game-block-row">
                                            <div className="game-block-logo">
                                                {NBALogos[game.away_team]}
                                            </div>
                                            <div className="game-row-city">
                                                <strong className="gl-odds">{this.nameshortener(game.away_team)}</strong>
                                                <span className="gl-odds2">{a_odds}</span>
                                            </div>
                                </div>
                                <div className="game-block-row">
                                            <div className="game-block-logo">
                                                {NBALogos[game.home_team]}
                                            </div>
                                            <div className="game-row-city">
                                                <strong className="gl-odds">{this.nameshortener(game.home_team)}</strong>
                                                <span className="gl-odds2">{h_odds}</span>
                                            </div>
                                </div>
                            </div></Link>
                    )       
                    } else if (game.home_score > -1 && game.away_score > -1) {
                        return (
                            <Link to={`/game/show/${game._id}`}>
                                <div className="game-block">
                                <div className="game-block-row">
                                    <strong className="gametime">Bets Locked</strong>
                                </div>
                                <div className="game-block-row">
                                            <div className="game-block-logo">
                                                {NBALogos[game.away_team]}
                                            </div>
                                            <div className="game-row-city">
                                                <strong className="gl-odds">{this.nameshortener(game.away_team)}</strong>
                                                <span className="gl-odds2">{game.away_score}</span>
                                            </div>
                                </div>
                                <div className="game-block-row">
                                <div className="game-block-logo">
                                                {NBALogos[game.home_team]}
                                            </div>
                                            <div className="game-row-city">
                                                <strong className="gl-odds">{this.nameshortener(game.away_team)}</strong>
                                                <span className="gl-odds2">{game.home_score}</span>
                                            </div>
                                </div>
                            </div></Link>
                    )} else {
                    return null;
                }
        } else {
            return null
        }
}
}

export default GamesListItem;