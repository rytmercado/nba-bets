import React from 'react';

import * as NBAIcons from 'react-nba-logos';

import Toast from '../toast/toast';

// import checkIcon from '../../images/check.svg'
import checkIcon from '../../images/success.png'

class BetModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            game: this.props.game_id,
            userId: this.props.session.user._id,
            selection: '', 
            amount: 0,
            isSubmitted: false
        }

        this.renderErrors = this.renderErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);



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

    printOdds (odds) {
        if (odds > 0) {
            return `${odds}`
        } else {
            return odds.toString()
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.setState({userId: this.props.session.user._id}, () => {
        
            this.props.postBet(this.state)
            .then(res => {
                if(typeof res !== "undefined"){
                    if(typeof res.bet !== "undefined"){
                        this.setState({isSubmitted: true})
                        this.props.fetchUser(this.props.userId)
                        setTimeout(() => {
                            this.setState({isSubmitted: false})}, 5000);
                        }
                }
            });
        })
        
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
        // console.log(this.props.a_team)
        // console.log(this.props.h_team)
        const testList = [
                {
                id: 1,
                title: 'Success!',
                description: 'Navigate to your profile page to view your bet.',
                backgroundColor: '#5cb85c',
                icon: checkIcon
                },
            ];

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
            "Los Angeles Clippers": <NBAIcons.LAC />,
            "Los Angeles Lakers": <NBAIcons.LAL />,
            "Memphis Grizzlies": <NBAIcons.MEM />,
            "Miami Heat": <NBAIcons.MIA/>,
            "Milwaukee Bucks": <NBAIcons.MIL/>,
            "Minnesota Timberwolves": <NBAIcons.MIN/>,
            "New Orleans Pelicans": <NBAIcons.NOP/>,
            "New York Knicks": <NBAIcons.NYK />,
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

        let toast;
        if(this.state.isSubmitted){
            toast = <Toast toastList={testList} position="top-right"/>
        }

        if (this.props.modalOpen) {
            // console.log(this.props.errors)
            return (
                <div className="modal-open">
                    {/* <Toast toastList={testList} position="top-right"/> */}
                    {toast}
                    {/* {this.state.isSubmitted && <Toast toastList={testList} position="top-right"/>} */}
                    <form className="modal-form" onSubmit={this.handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title">Bet Slip</h5>
                        </div>
                        <div className="modal-body">
                            {NBALogos[this.props.h_team]}
                            <div>
                                <input id="home-team" onChange={this.handleInput("selection")} type="radio" name="label" required="required" value="true"/>
                                <label className="bet-team-name" htmlFor="home-team">{this.props.h_team} {this.printOdds(this.props.h_odds)}</label>
                            </div>
                            {NBALogos[this.props.a_team]}
                            <div>
                                <input id="away-team" onChange={this.handleInput("selection")} type="radio" required="required" name="label" value="false"/>
                                <label className="bet-team-name" htmlFor="away-team">{this.props.a_team} {this.printOdds(this.props.a_odds)}</label>
                            </div>
                            <input className="amount" type="number" onChange={this.handleAmount("amount")} value={this.state.amount}/>
                            <label className="bet-team-name" htmlFor="amount">Bet Amount</label>
                        </div>
                        <div className={(this.props.errors.length > 0 ? "errors": "errors-hidden")}>
                                {this.renderErrors()}
                        </div>
                        <div className="modal-footer">
                            <button className="bet-button" type="submit">Place Bet</button>
                            <button className="bet-button" onClick={this.props.onClose}>Close</button>
                        </div>
                    </form>
                    <div className="modal-screen"></div>
                </div>
        )} 
        else {
            return null;
        }
        }         
    } 

export default BetModal;