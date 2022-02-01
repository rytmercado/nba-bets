import React from 'react';
import { Link } from 'react-router-dom';

import nba_logo from '../../images/nba.png';

import * as NBAIcons from 'react-nba-logos';

import BetModalContainer from '../bet_modal/bet_modal_container';
import TutorialContainer from '../tutorial/tutorial_container';


class GameIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false,
            helpModalOpen: false, 
        }

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(e){
        e.preventDefault();
        this.setState({modalOpen: false});
        this.props.clearBetErrors();
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

        let betLocked
        if (game.away_score > 0 || game.home_score > 0){
            betLocked = <button className="game-bet-btn-locked">Bets Locked!</button>
        } else {
            betLocked = <button className="game-bet-btn" onClick={() => this.setState({modalOpen: true})}>Place Bet</button>
        }

        let status = ""
        if(game.status === "Final"){
            status = "Final"
        } else {
            status = "Live"
        }

        return (
                <div className="game-index-container">
                    <div className="game">

                        <div className="game-header">
                            <button className="game-alert-bt" onClick={() => this.setState({helpModalOpen: true})}>Help</button>
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
                                    </div>
                                    <p className="team-away-home">AWAY</p>
                                    <h2 className="game-team-name">{game.away_team}</h2>
                                    <button className="game-bet-odds">{a_odds}</button>
                                </div>
                            </div>

                            <div className="column">
                                <div className="game-details">
                                    <div className="game-period">
                                        <strong>{game.game_time}</strong>
                                    </div>
                                    <div className="game-period">{game.game_minute}</div>
                                    <div className="game-score">
                                        <span className="game-score-number game-score-number--leading" >{game.away_score}</span>
                                        <span className="game-score-divider">:</span>
                                        <span className="game-score-number">{game.home_score}</span>
                                    </div>
                                    {/* <div className={(game.away_score > 0 || game.home_score > 0 ? "game-status": "game-status-hidden")}>Live</div>  */}
                                    <div className={(game.status != "Final" && (game.away_score > 0 || game.home_score > 0) ? "game-status": "game-status-hidden")}>{status}</div> 
                                    {/* <div className={(game.status === "Final") ? "game-status-final": "game-status-final-hidden"}>Final</div>  */}
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
                                    <p className="team-away-home">HOME</p>
                                    <h2 className="game-team-name">{game.home_team}</h2>
                                    <button className="game-bet-odds">{h_odds}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TutorialContainer onClose={() => this.setState({helpModalOpen: false})} modalOpen={this.state.helpModalOpen} home_team={game.home_team} away_team={game.away_team} home_odds={h_odds} away_odds={a_odds}/>
                    <BetModalContainer onClose={this.handleClose} modalOpen={this.state.modalOpen} h_team={game.home_team} a_team={game.away_team} h_odds={h_odds} a_odds={a_odds} game_id={game._id}/>
                </div>
        )
    }
}

export default GameIndexItem;