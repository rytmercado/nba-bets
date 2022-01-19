import React from 'react';
import { Link } from 'react-router-dom';
import nba_logo from '../../images/nba.png';
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
                const betLocked = <Link className="game-show-btn" to={`/game/show/${game._id}`}>View Game</Link>
                return (
                        <div className="game-index-container2">
                            <div className="game2">
        
                                <div className="game-header">
                                    <div className="nba-game-logo2">
                                        <img src={nba_logo}></img>
                                    </div>
    
                                </div>
                                
                                <div className="game-content">
                                    <div className="column">
                                        <div className="team team--away">
                                            <div className="team-logo">
                                                {NBALogos[game.away_team]}
                                            </div>
                                            <h2 className="team-name2">{game.away_team}</h2>
                                            <button className="game-bet-odds">{a_odds}</button>
                                        </div>
                                    </div>
        
                                    <div className="column">
                                        <div className="game-details">
                                            <div className="game-period">
                                                <strong>{game.game_time}</strong>
                                            </div>
                                            <div className="game-period">{game.game_minute}</div>
                                            <span className="game-list-at">
                                                VS
                                            </span>
                                            <div className={(game.away_score > 0 || game.home_score > 0 ? "game-status": "game-status-hidden")}>Live</div> 
                                            <div className="game-bet">
                                                {betLocked}
                                            </div>
                                            <div>
                                                
                                            </div>
                                        </div>
                                    </div>
        
        
                                    <div className="column">
                                        <div className="team team--home">
                                            <div className="team-logo">
                                            {NBALogos[game.home_team]}
                                            </div>
                                            <h2 className="team-name2">{game.home_team}</h2>
                                            <button className="game-bet-odds">{h_odds}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
                
            } else {
                const betLocked = <Link className="game-show-btn" to={`/game/show/${game._id}`}>View Game</Link>
            return (
                    <div className="game-index-container2">
                        <div className="game2">
    
                            <div className="game-header">
                                <div className="nba-game-logo2">
                                    <img src={nba_logo}></img>
                                </div>

                            </div>
                            
                            <div className="game-content">
                                <div className="column">
                                    <div className="team team--away">
                                        <div className="team-logo">
                                            {NBALogos[game.away_team]}
                                        </div>
                                        <h2 className="team-name2">{game.away_team}</h2>
                                        <button className="game-bet-odds">{a_odds}</button>
                                    </div>
                                </div>
    
                                <div className="column">
                                    <div className="game-details">
                                        <div className="game-period">
                                            <strong>{game.game_time}</strong>
                                        </div>
                                        <div className="game-period">{game.game_minute}</div>
                                        <span className="game-list-at">
                                            VS
                                        </span>
                                        <div className={(game.away_score > 0 || game.home_score > 0 ? "game-status": "game-status-hidden")}>Live</div> 
                                        <div className="game-bet">
                                            {betLocked}
                                        </div>
                                        <div>
                                            
                                        </div>
                                    </div>
                                </div>
    
    
                                <div className="column">
                                    <div className="team team--home">
                                        <div className="team-logo">
                                        {NBALogos[game.home_team]}
                                        </div>
                                        <h2 className="team-name2">{game.home_team}</h2>
                                        <button className="game-bet-odds">{h_odds}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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