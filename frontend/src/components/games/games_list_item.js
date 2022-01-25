import React from 'react';
import * as NBAIcons from 'react-nba-logos';

class GamesListItem extends React.Component {
    constructor(props) {
        super(props);

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
            "Los Angeles Lakers": <NBAIcons.LAL/>,
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
            const away = game.away_team.split(" ")
            const home = game.home_team.split(" ")
            let awayCity;
            let awayTeam;
            let homeCity;
            let homeTeam;
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
            if (away.length > 2) {
                awayCity = away.slice(0, 2).join(" ")
                awayTeam = away.slice(2, 3).join(" ")
            } else if (away.length === 2) {
                awayCity = away.slice(0, 1).join(" ")
                awayTeam = away.slice(1, 2).join(" ")
            } else if (home.length > 2) {
                homeCity = home.slice(0, 1).join(" ")
                homeTeam = home.slice(1, 2).join(" ")
            } else if (home.length === 2) {
                homeCity = home.slice(0, 1).join(" ")
                homeTeam = home.slice(1, 2).join(" ")
            }
            if (game.status === 'Incomplete') {
                const gameTime = game.game_time;
                    return (
                            <div className="game-block">
                                <div className="game-time">
                                        <span>{gameTime}</span>
                                </div>
                                <ul className="game-block-teams">
                                    <li className="game-block-row">
                                            <div className="game-block-logo">
                                                {NBALogos[game.away_team]}
                                            </div>
                                            <h2 className="game-row-city">{awayCity}</h2>
                                            <p className="game-row-name">{awayTeam}</p>
                                            <strong className="game-list-odds">{a_odds}</strong>
                                    </li> 
                                    <li>
                                    <div className="game-block-row">
                                            <div className="game-list-logo">
                                                {NBALogos[game.home_team]}
                                            </div>
                                            <h2 className="game-row-city">{homeCity}</h2>
                                            <p className="game-row-name">{homeTeam}</p>
                                            <strong className="game-list-odds">{h_odds}</strong>
                                        </div>
                                    </li> 
                                </ul>
                            </div>
                    )
                    } else {
                        const gameTime = "Bets Locked"
                        return (
                            <div className="game-block">
                                <div className="game-time">
                                        <span>{gameTime}</span>
                                </div>
                                <ul className="game-block-teams">
                                    <li>
                                        <div className="game-block-row">
                                            <div className="game-list-logo">
                                                {NBALogos[game.away_team]}
                                            </div>
                                            <h2 className="game-row-city">{awayCity}</h2>
                                            <p className="game-row-name">{awayTeam}</p>
                                            <strong className="game-list-odds">{a_odds}</strong>
                                        </div>
                                    </li> 
                                    <li>
                                    <div className="game-block-row">
                                            <div className="game-list-logo">
                                                {NBALogos[game.home_team]}
                                            </div>
                                            <h2 className="game-row-city">{homeCity}</h2>
                                            <p className="game-row-name">{homeTeam}</p>
                                            <strong className="game-list-odds">{h_odds}</strong>
                                        </div>
                                    </li> 
                                </ul>
                            </div>
                    )
                    }
                } else {
                    return (
                        <div>GAMESLISTITEM</div>
                    )
                }
}
}

export default GamesListItem;