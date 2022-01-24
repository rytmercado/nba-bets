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
            { if (game.status === 'Incomplete') {
                const gameTime = game.game_time;
                return (
                        <div className="game-list">
                            <div className="game-list-time">
                                    <span>{gameTime}</span>
                            </div>
                            <ul>
                                <li>
                                    <div className="game-list-item">
                                            <div className="game-list-row">
                                                <div className="game-list-logo">
                                                    {NBALogos[game.away_team]}
                                                </div>
                                                <h2 className="game-list-name">{game.away_team}</h2>
                                                <strong className="game-list-odds">{a_odds}</strong>
                                            </div>
                                    </div>
                                </li> 
                                <li>
                                    <div className="game-list-item">
                                        <div className="game-list-row">
                                            <div className="game-list-logo">
                                                {NBALogos[game.home_team]}
                                            </div>
                                            <h2 className="game-list-name">{game.home_team}</h2>
                                            <strong className="game-list-odds">{h_odds}</strong>
                                        </div>
                                    </div>
                                </li> 
                            </ul>
                        </div>
                )
                
            } else {
                const gameTime = "Bets Locked"
                return (
                    <div className="game-list">
                        <div className="game-list-lock">
                                <span>{gameTime}</span>
                        </div>
                        <ul>
                            <li>
                                <div className="game-list-item">
                                        <div className="game-list-row">
                                            <div className="game-list-logo">
                                                {NBALogos[game.away_team]}
                                            </div>
                                            <h2 className="game-list-name">{game.away_team}</h2>
                                            <strong className="game-list-odds">{a_odds}</strong>
                                        </div>
                                </div>
                            </li> 
                            <li>
                                <div className="game-list-item">
                                    <div className="game-list-row">
                                        <div className="game-list-logo">
                                            {NBALogos[game.home_team]}
                                        </div>
                                        <h2 className="game-list-name">{game.home_team}</h2>
                                        <strong className="game-list-odds">{h_odds}</strong>
                                    </div>
                                </div>
                            </li> 
                        </ul>
                    </div>
            )
            }}
        } else {
            return (
                <div>GAMESLISTITEM</div>
            )
        }
}
}

export default GamesListItem;