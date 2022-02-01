import React from 'react';
import logo from '../../images/smallest-logo.JPG'
import * as NBAIcons from 'react-nba-logos';
import  CommentContainer  from '../comments/comment_container';
import DoughnutContainer from '../graphs/doughnut_container';
import {Animated} from 'react-animated-css';
import CurrencyBarContainer from '../graphs/currency_container';
import Toast from '../toast/toast';
import checkIcon from '../../images/success.png'

class BigBetModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            game: this.props.game._id,
            userId: '',
            selection: '', 
            amount: 1000,
            leftcolor: "white",
            rightcolor: "white",
            stats: false,
            chat: false,
            isSubmitted: false
        }

        this.renderErrors = this.renderErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectLine = this.selectLine.bind(this);
        this.toggleStats = this.toggleStats.bind(this);
        this.toggleChat = this.toggleChat.bind(this);


    }

    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }


    handleInput(type) {
        return e => {
            this.setState({[type]: e.currentTarget.value})
        }
      }

    handleAmount(type) {
        return e => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    selectLine(line) {
        const awayTeam = this.props.game.away_team;
        const homeTeam = this.props.game.home_team;
        if (line === "away") {
            this.setState({leftcolor: '#53d337',
            rightcolor: 'white',
            selection: `${awayTeam}`})
        
        } else {
            this.setState({rightcolor: '#53d337',
            leftcolor: 'white', 
            selection: `${homeTeam}` })
        }
    }

    printOdds (odds) {
        if (odds > 0) {
            return `+${odds}`
        } else {
            return odds.toString()
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        const object = {
            game: this.state.game,
            userId: this.props.session.user._id,
            selection: this.state.selection, 
            amount: this.state.amount,
        }
        this.props.postBet(object)
            .then(res => {
                if(typeof res !== "undefined"){
                    if(typeof res.bet !== "undefined"){
                        this.setState({isSubmitted: true})
                        this.props.fetchUser(this.props.userId)
                        setTimeout(() => {
                            this.setState({isSubmitted: false})}, 8000);
                        }
                }
            })
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
        const testList = [
                {
                id: 1,
                title: 'Success!',
                description: 'Navigate to your profile page to view your bet.',
                backgroundColor: '#5cb85c',
                icon: checkIcon
                },
            ];

        let toast;
        if(this.state.isSubmitted){
            toast = <Toast toastList={testList} position="top-right"/>
        }
        
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
                    {toast}
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
                                    <div className="lines">
                                        <button className="big-bet-team-name" htmlFor="home-team" onClick={() => this.selectLine("away")} style={{backgroundColor: this.state.leftcolor}}>{this.props.game.away_team} {this.printOdds(this.props.game.away_odds)}</button>
                                        <button className="big-bet-team-name" htmlFor="away-team" onClick={() => this.selectLine("home")} style={{backgroundColor: this.state.rightcolor}}>{this.props.game.home_team} {this.printOdds(this.props.game.home_odds)}</button>
                                    </div>
                                    <div className="wager?">
                                        <p className="ready-to-wager">Ready to bet? Select a team's line and enter a bet amount.</p>
                                    </div>
                                    <label className="big-bet-amount" htmlFor="amount">Bet Amount:</label>
                                    <input className="big-modal-amount" onChange={this.handleAmount("amount")} value={this.state.amount}/>
                                    <div className="big-modal-footer">	
                                        <div className="big-bet-button" aria-label="statistics" onClick={() => this.toggleStats()}>Stats 📈</div>
                                        <div className="big-bet-button" onClick={this.handleSubmit}>Place Bet 💰</div>
                                        <div className="big-bet-button" onClick={() => this.toggleChat()}>Chat 😎</div>
                                    </div>
                                    <div className="big-modal-errors">{this.renderErrors()}</div>
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

export default BigBetModal;