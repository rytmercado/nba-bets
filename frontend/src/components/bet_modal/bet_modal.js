import React from 'react';

class BetModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            game: '',
            userId: this.props.session.user.id,
            selection: '', 
            amount: 100,
        }

        // this.renderErrors = this.renderErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    componentDidMount () {
        // this.props.resetErrors();
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
            return `+ ${odds}`
        } else {
            return odds.toString()
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        console.log(this.state)
        this.props.postBet(this.state)
    }



    // renderErrors() {
    //     return(
    //       <ul>
    //         {Object.keys(this.props.errors).map((error, i) => (
    //           <li className="error" key={i}>
    //             {this.state.errors[error]}
    //           </li>
    //         ))}
    //       </ul>
    //     );
    //   }

    


    render () {
        const todaysGames = this.props.games.filter(game => game.status !== 'Final')
        const gameOptions = todaysGames.map(game => { return(<option htmlFor="game" key={game.id} value={game._id}>{game.home_team}  vs.  {game.away_team}</option>)})
        if (this.props.modalOpen) {
            { if (this.state.game !== 'Select a matchup' && this.state.game !== '') {
                const game = this.props.games.find(game => game._id === this.state.game)
            return (
                <div className="modal-open">
                    <form className="modal-form" onSubmit={this.handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title">Bet Slip</h5>
                        </div>
                        <div className="modal-body">
                                <select onChange={this.handleInput("game")} name="home_team">
                                    <option>Select a matchup</option>
                                    { gameOptions }
                                </select>
                                <br/>
                                <label htmlFor="home-team">{game.home_team} {this.printOdds(game.home_odds)}</label>
                                <input id="home-team" onChange={this.handleInput("selection")} type="radio" value="true" name="label"/>
                                <br/>
                                <label htmlFor="away-team">{game.away_team} {this.printOdds(game.away_odds)}</label>
                                <input id="away-team" onChange={this.handleInput("selection")} type="radio" name="label"value="false"/>
                                <br/>
                                <label htmlFor="amount">Bet Amount:</label>
                                <input className="amount" onChange={this.handleAmount("amount")} value={this.state.amount}/>
                                <br/>
                                {/* <div>{this.renderErrors()}</div> */}
                        </div>
                        <div className="modal-footer">
                            <button className="bet-button" type="submit">Place Bet</button>
                            <button className="bet-button" onClick={this.props.onClose}>Close</button>
                        </div>
                    </form>
                </div>
        )} else {
            return (
                <div className="modal-open">
                    <form className="modal-form">
                        <div className="modal-header">
                            <h5 className="modal-title">Bet Slip</h5>
                        </div>
                        <div className="modal-body">
                                <select onChange={this.handleInput("game")} name="home_team">
                                    <option>Select a matchup</option>
                                    { gameOptions }
                                </select>
                        </div>
                    </form>
                </div>
            )}

        }         
    } else {
    return null;
    }
}}

export default BetModal;