import React from 'react';
import { Link } from 'react-router-dom';

import nba_logo from '../../images/nba.png';
import lakers_logo from '../../images/lakers.png';
import warriors_logo from '../../images/warriors.png';

import * as NBAIcons from 'react-nba-logos';


class GameIndexItem extends React.Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        let game = this.props.game;
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
                return (
                        // <div className="game-index-item-grid">
                        //     <div className="team">{game.away_team}</div>
                        //     <div className="odds">{game.away_odds}</div>
                        //     <div className="team">{game.home_team}</div>
                        //     <div className="odds">{game.home_odds}</div>
                        //     <Link to={`/game/show/${game._id}`}>Game Log</Link>
                        // </div>

                        <div className="game-index-container">
                            <div className="game">

                                <div className="game-header">
                                    <button className="game-alert-btn">Alert</button>
                                    <div className="nba-game-logo">
                                        <img src={nba_logo}></img>
                                        National Basketball League
                                    </div>
                                    <Link to={`/game/show/${game._id}`}><button className="game-log-btn">View Game Log</button></Link>
                                </div>
                                
                                <div className="game-content">
                                    <div className="column">
                                        <div className="team team--away">
                                            <div className="team-logo">
                                                {NBALogos[game.away_team]}
                                                {/* <img src={warriors_logo} alt="away-team"></img> */}
                                            </div>
                                            <h2 className="team-name">{game.away_team}</h2>
                                            <button className="game-bet-odds">{a_odds}</button>
                                        </div>
                                    </div>

                                    <div className="column">
                                        <div className="game-details">
                                            <div className="game-date">
                                                25 Dec at <strong>{game.game_time}</strong>
                                            </div>
                                            {/* <div className="game-date">{game.start_time}</div> */}
                                            <div className="game-score">
                                                <span className="game-score-number game-score-number--leading" >{game.away_score}</span>
                                                <span className="game-score-divider">:</span>
                                                <span className="game-score-number">{game.home_score}</span>
                                            </div>
                                            <div className="game-period">
                                                Q{game.quarter}
                                            </div>
                                            <div className="game-status">Live</div> 
                                            <div className="game-bet">
                                                <button className="game-bet-btn">Place Bet</button>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="column">
                                        <div className="team team--home">
                                            <div className="team-logo">
                                            {NBALogos[game.home_team]}
                                                {/* <img src={lakers_logo} alt="home-team"></img> */}
                                            </div>
                                            <h2 className="team-name">{game.home_team}</h2>
                                            <button className="game-bet-odds">{h_odds}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            }
}

export default GameIndexItem;