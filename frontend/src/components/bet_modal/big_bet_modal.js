import React from 'react';
import logo from '../../images/smallest-logo.JPG'
import * as NBAIcons from 'react-nba-logos';

class BigBetModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            game: this.props.game._id,
            userId: this.props.session.user.id,
            selection: '', 
            amount: 1000,
            leftcolor: "darkslategray",
            rightcolor: "darkslategray",
        }

        this.renderErrors = this.renderErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectLine = this.selectLine.bind(this);


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
        if (line === "away") {
            this.setState({leftcolor: '#53d337',
            rightcolor: 'darkslategray',
            selection: false})
        
        } else {
            this.setState({rightcolor: '#53d337',
            leftcolor: 'darkslategray', 
            selection: true })
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
            userId: this.state.userId,
            selection: this.state.selection, 
            amount: this.state.amount,
        }
        this.props.postBet(object)
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

    


    render () {
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
        return (
                <div className="big-modal">
                    <div className="big-modal-logos">
                        {NBALogos[this.props.game.away_team]}
                        <p className="at">VS</p>
                        {NBALogos[this.props.game.home_team]}
                    </div>
                    <form className="big-modal-form" onSubmit={this.handleSubmit}>
                        <div className="big-modal-header">
                            <h5 className="big-modal-title">{this.props.game.away_team} at {this.props.game.home_team}</h5>
                        </div>
                        <div className="big-modal-body">
                                <div className="big-modal-logo">
                                    <img src={logo}></img>
                                </div>
                                <div className="lines">
                                    <button className="big-bet-team-name" htmlFor="home-team" onClick={() => this.selectLine("away")} style={{backgroundColor: this.state.leftcolor}}>{this.props.game.away_team} {this.printOdds(this.props.game.home_odds)}</button>
                                    <button className="big-bet-team-name" htmlFor="away-team" onClick={() => this.selectLine("home")} style={{backgroundColor: this.state.rightcolor}}>{this.props.game.home_team} {this.printOdds(this.props.game.away_odds)}</button>
                                    
                                </div>
                                <div className="wager?">
                                    <p className="ready-to-wager">Ready to bet? Select a team's line and enter a bet amount.</p>
                                </div>
                                <label className="big-bet-amount" htmlFor="amount">Bet Amount:</label>
                                <input className="amount" onChange={this.handleAmount("amount")} value={this.state.amount}/>
                                <div className="big-modal-footer">
                                    <button className="big-bet-button" type="submit">Place Bet</button>
                                </div>
                                <div className="errors">{this.renderErrors()}</div>
                        </div>
                    </form>
                </div>
        )
        }         
    } 

export default BigBetModal;