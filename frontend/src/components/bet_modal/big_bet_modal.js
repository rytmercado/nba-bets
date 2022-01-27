import React from 'react';

import * as NBAIcons from 'react-nba-logos';

class BigBetModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            game: this.props.game._id,
            userId: this.props.session.user._id,
            selection: '', 
            amount: 1000,
        }

        this.renderErrors = this.renderErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


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

    printOdds (odds) {
        if (odds > 0) {
            return `${odds}`
        } else {
            return odds.toString()
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        console.log(this.state)
        this.props.postBet(this.state)
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
            "Los Angeles Clippers": <NBAIcons.LAC size={30}/>,
            "Los Angeles Lakers": <NBAIcons.LAL size={30}/>,
            "Memphis Grizzlies": <NBAIcons.MEM/>,
            "Miami Heat": <NBAIcons.MIA/>,
            "Milwaukee Bucks": <NBAIcons.MIL/>,
            "Minnesota Timberwolves": <NBAIcons.MIN size={30}/>,
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
        return (
                <div className="big-modal">
                    <form className="big-modal-form" onSubmit={this.handleSubmit}>
                        <div className="big-modal-header">
                            <h5 className="modal-title">{this.props.game.away_team} at {this.props.game.home_team}</h5>
                        </div>
                        <div className="modal-body">
                                <br/>
                                {NBALogos[this.props.a_team]}
                                <label className="bet-team-name" htmlFor="home-team">{this.props.game.home_team} {this.printOdds(this.props.game.home_odds)}</label>
                                <input id="home-team" onChange={this.handleInput("selection")} type="radio" value="true" name="label"/>
                                <br/>
                                <label className="bet-team-name" htmlFor="away-team">{this.props.game.home_team} {this.printOdds(this.props.game.away_odds)}</label>
                                {NBALogos[this.props.h_team]}
                                <input id="away-team" onChange={this.handleInput("selection")} type="radio" name="label"value="false"/>
                                <br/>
                                <label className="bet-team-name" htmlFor="amount">Bet Amount:</label>
                                <input className="amount" onChange={this.handleAmount("amount")} value={this.state.amount}/>
                                <br/>
                                <div className="errors">{this.renderErrors()}</div>
                        </div>
                        <div className="modal-footer">
                            <button className="bet-button" type="submit">Place Bet</button>
                            <button className="bet-button" onClick={this.props.onClose}>Close</button>
                        </div>
                    </form>
                </div>
        )
        }         
    } 

export default BigBetModal;