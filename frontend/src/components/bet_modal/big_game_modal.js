import React from 'react';
import logo from '../../images/smallest-logo.JPG'
import * as NBAIcons from 'react-nba-logos';
import  CommentContainer  from '../comments/comment_container';
import DoughnutContainer from '../graphs/doughnut_container';
import {Animated} from 'react-animated-css';
import CurrencyBarContainer from '../graphs/currency_container'

class BigGameModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stats: false,
            chat: false,
        }

        this.renderErrors = this.renderErrors.bind(this);
        this.toggleStats = this.toggleStats.bind(this);
        this.toggleChat = this.toggleChat.bind(this);


    }


    printOdds (odds) {
        if (odds > 0) {
            return `+${odds}`
        } else {
            return odds.toString()
        }
    }

    


    renderErrors() {
        return(
            <ul>
            {Object.values(this.props.errors).map((error, i) => (
                <li className="errors" key={i}>
                    {error}
                </li>
            ))}
            </ul>
        );
    }

    toggleStats() {
            const prevState = this.state.stats
            return (
                this.setState({
                    stats: !prevState
                })
            )
    }

    toggleChat() {
        const prevState = this.state.chat
        return (
            this.setState({
                chat: !prevState
            })
        )
}


    


    render () {
        const g = this.props.game;
        const NBALogos = {
            "Atlanta Hawks": <NBAIcons.ATL size={300}/>,
            "Boston Celtics": <NBAIcons.BOS size={300}/>,
            "Brooklyn Nets": <NBAIcons.BKN size={300}/>,
            "Charlotte Hornets": <NBAIcons.CHA size={300}/>,
            "Chicago Bulls": <NBAIcons.CHI size={300}/>,
            "Cleveland Cavaliers": <NBAIcons.CLE size={300}/>,
            "Dallas Mavericks": <NBAIcons.DAL size={300}/>,
            "Denver Nuggets": <NBAIcons.DEN size={300}/>,
            "Detroit Pistons": <NBAIcons.DET size={300} />,
            "Golden State Warriors": <NBAIcons.GSW size={300} />,
            "Houston Rockets": <NBAIcons.HOU size={300} />,
            "Indiana Pacers": <NBAIcons.IND size={300} />,
            "Los Angeles Clippers": <NBAIcons.LAC size={300}/>,
            "Los Angeles Lakers": <NBAIcons.LAL size={300}/>,
            "Memphis Grizzlies": <NBAIcons.MEM size={300} />,
            "Miami Heat": <NBAIcons.MIA size={300} />,
            "Milwaukee Bucks": <NBAIcons.MIL size={300}/>,
            "Minnesota Timberwolves": <NBAIcons.MIN size={300}/>,
            "New Orleans Pelicans": <NBAIcons.NOP size={300} />,
            "New York Knicks": <NBAIcons.NYK size={300} />,
            "Oklahoma City Thunder": <NBAIcons.OKC size={300}/>,
            "Orlando Magic": <NBAIcons.ORL size={300}/>,
            "Philadelphia 76ers": <NBAIcons.PHI size={300} />,
            "Phoenix Suns": <NBAIcons.PHX size={300}/>,
            "Portland Trail Blazers": <NBAIcons.POR size={300}/>,
            "Sacramento Kings": <NBAIcons.SAC size={300}/>,
            "San Antonio Spurs": <NBAIcons.SAS size={300}/>,
            "Toronto Raptors": <NBAIcons.TOR size={300}/>,
            "Utah Jazz": <NBAIcons.UTA size={300}/>,
            "Washington Wizards": <NBAIcons.WAS size={300}/>
        }
        if (g) {

            return (
                <div className="game-show">
                    <Animated animationIn="slideInDown" animationOut="slideOutUp" animationInDuration={1000} animationOutDuration={0} isVisible={this.state.stats}>
                        <div className="stats-box">
                            <DoughnutContainer g={g} />
                            <CurrencyBarContainer g={g} />
                        </div>
                    </Animated>
                    <div className="big-modal">
                        <div className="big-modal-logos">
                            {NBALogos[this.props.game.away_team]}
                            <p className="at">VS</p>
                            {NBALogos[this.props.game.home_team]}
                        </div>
                        <div className="big-modal-form" onSubmit={this.handleSubmit}>
                            <div className="big-modal-header">
                                <h5 className="big-modal-title">{this.props.game.away_team} at {this.props.game.home_team}</h5>
                            </div>
                            <div className="big-modal-body">
                                    <div className="scores">
                                        <button className="big-bet-team-score">{this.props.game.away_score}</button>
                                        <button className="big-bet-team-score">{this.props.game.home_score}</button>
                                    </div>
                                    <div className="wager?">
                                        <p className="ready-to-wager">Pregame odds </p>
                                    </div>
                                    <div className="lines">
                                        <div className="big-bet-team-name" htmlFor="home-team" >{this.props.game.away_team} {this.printOdds(this.props.game.away_odds)}</div>
                                        <div className="big-bet-team-name" htmlFor="away-team" >{this.props.game.home_team} {this.printOdds(this.props.game.home_odds)}</div>
                                    </div>
                                    <div className="big-modal-footer">	
                                        <div className="big-bet-button" aria-label="statistics" onClick={() => this.toggleStats()}>Stats 📈</div>
                                        <div className="big-bet-lock" >Bets Locked </div>
                                        <div className="big-bet-button" onClick={() => this.toggleChat()}>Chat 😎</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <Animated animationIn="slideInDown" animationOut="slideOutUp" animationInDuration={1000} animationOutDuration={0} isVisible={this.state.chat}>
                            <div className="comments">
                                <CommentContainer g={g} />
                            </div>
                    </Animated>
                </div>
            )
            }  else {
                return null;
            }       
        }
    } 

export default BigGameModal;