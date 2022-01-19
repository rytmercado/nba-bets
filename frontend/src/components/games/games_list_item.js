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
            "Atlanta Hawks": <NBAIcons.ATL size={'100%'}/>,
            "Boston Celtics": <NBAIcons.BOS size={'100%'}/>,
            "Brooklyn Nets": <NBAIcons.BKN size={'100%'}/>,
            "Charlotte Hornets": <NBAIcons.CHA size={'100%'}/>,
            "Chicago Bulls": <NBAIcons.CHI size={'100%'}/>,
            "Cleveland Cavaliers": <NBAIcons.CLE size={'100%'}/>,
            "Dallas Mavericks": <NBAIcons.DAL size={'100%'}/>,
            "Denver Nuggets": <NBAIcons.DEN size={'100%'}/>,
            "Detroit Pistons": <NBAIcons.DET size={'100%'}/>,
            "Golden State Warriors": <NBAIcons.GSW size={'100%'}/>,
            "Houston Rockets": <NBAIcons.HOU size={'100%'}/>,
            "Indiana Pacers": <NBAIcons.IND size={'100%'}/>,
            "Los Angeles Clippers": <NBAIcons.LAC size={'100%'}/>,
            "Los Angeles Lakers": <NBAIcons.LAL size={'100%'}/>,
            "Memphis Grizzlies": <NBAIcons.MEM size={'100%'}/>,
            "Miami Heat": <NBAIcons.MIA size={'100%'}/>,
            "Milwaukee Bucks": <NBAIcons.MIL size={'100%'}/>,
            "Minnesota Timberwolves": <NBAIcons.MIN size={'100%'}/>,
            "New Orleans Pelicans": <NBAIcons.NOP size={'100%'}/>,
            "New York Knicks": <NBAIcons.NYK size={'100%'}/>,
            "Oklahoma City Thunder": <NBAIcons.OKC size={'100%'}/>,
            "Orlando Magic": <NBAIcons.ORL size={'100%'}/>,
            "Philadelphia 76ers": <NBAIcons.PHI size={'100%'}/>,
            "Phoenix Suns": <NBAIcons.PHX size={'100%'}/>,
            "Portland Trail Blazers": <NBAIcons.POR size={'100%'}/>,
            "Sacramento Kings": <NBAIcons.SAC size={'100%'}/>,
            "San Antonio Spurs": <NBAIcons.SAS size={'100%'}/>,
            "Toronto Raptors": <NBAIcons.TOR size={'100%'}/>,
            "Utah Jazz": <NBAIcons.UTA size={'100%'}/>,
            "Washington Wizards": <NBAIcons.WAS size={'100%'}/>
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