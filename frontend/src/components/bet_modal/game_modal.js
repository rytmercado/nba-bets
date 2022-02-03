import React from 'react';

import * as NBAIcons from 'react-nba-logos';

class GameModal extends React.Component {
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
                        <i className="at">VS</i>
                        {NBALogos[this.props.game.home_team]}
                    </div>
                    <form className="big-modal-form" onSubmit={this.handleSubmit}>
                        <div className="big-modal-header">
                            <h5 className="modal-title">{this.props.game.away_team} at {this.props.game.home_team}</h5>
                        </div>
                        <div className="modal-body">
                                <span className="bet-team-score">{this.props.game.away_score}</span>
                                <span className="bet-team-score">{this.props.game.home_score}</span>
                        </div>
                        <div className="modal-footer">
                            <button className="big-lock-button" type="submit">Bets Locked</button>
                        </div>
                    </form>
                </div>
        )
        }         
    } 

export default GameModal;