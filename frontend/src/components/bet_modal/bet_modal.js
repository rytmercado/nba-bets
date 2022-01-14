import React from 'react';

import * as NBAIcons from 'react-nba-logos';

class BetModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            game: this.props.game_id,
            userId: this.props.session.user._id,
            selection: '', 
            amount: 0,
        }

        this.renderErrors = this.renderErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    componentDidMount(){
        this.props.fetchUser(this.props.userId)
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
        // this.setState({userId: this.props.session.user._id}, () => {
        debugger  
        this.props.postBet(this.state)
          .then(res => {
              console.log(res)
              if(typeof res !== "undefined"){
                  console.log(res)
                  if(typeof res.bet !== "undefined"){
                      console.log("close modal")
                      this.props.onClose();
                  }
              }
              return res
          });
          // this.props.onClose();
        // })
        
    }


    renderErrors() {
        return(
            <ul>
                <li className="errors">
                    {this.props.errors}
                </li>
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
            "Dallas Mavericks": <NBAIcons.DAL size={1000}/>,
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
            "Minnesota Timberwolves": <NBAIcons.MIN/>,
            "New Orleans Pelicans": <NBAIcons.NOP/>,
            "New York Knicks": <NBAIcons.NYK size={1000}/>,
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

        if (this.props.modalOpen) {
            // console.log(this.props.errors)
            return (
                <div className="modal-open">
                    <form className="modal-form" onSubmit={this.handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title">Bet Slip</h5>
                        </div>
                        <div className="modal-body">
                            {NBALogos[this.props.h_team]}
                            <div>
                                <input id="home-team" onChange={this.handleInput("selection")} type="radio" name="label" required="required"/>
                                <label className="bet-team-name" htmlFor="home-team">{this.props.h_team} {this.printOdds(this.props.h_odds)}</label>
                            </div>
                            {NBALogos[this.props.a_team]}
                            <div>
                                <input id="away-team" onChange={this.handleInput("selection")} type="radio" required="required" name="label"/>
                                <label className="bet-team-name" htmlFor="away-team">{this.props.a_team} {this.printOdds(this.props.a_odds)}</label>
                            </div>
                                <div className={(this.props.errors.length > 0 ? "errors": "errors-hidden")}>
                                    {this.renderErrors()}
                                </div>
                                <input className="amount" onChange={this.handleAmount("amount")} value={this.state.amount}/>
                                <label className="bet-team-name" htmlFor="amount">Bet Amount</label>
                        </div>
                        <div className="modal-footer">
                            <button className="bet-button" type="submit">Place Bet</button>
                            <button className="bet-button" onClick={this.props.onClose}>Close</button>
                        </div>
                    </form>
                </div>
        )} 
        else {
            return null;
        }
        }         
    } 

export default BetModal;