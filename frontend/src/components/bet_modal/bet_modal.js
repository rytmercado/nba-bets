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

        this.renderErrors = this.renderErrors.bind(this);


    }

    componentDidMount () {
        this.props.resetErrors();
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

    handleSubmit() {
        this.props.postBet(this.state)
    }

    renderErrors() {
        if (this.props.errors.length > 0) {
          return(
            <ul>
              {this.props.errors.map((error, i) => (
                <li key={i}>
                  <p className="error">{error}</p>
                </li>
              ))}
            </ul>
          );
        } else {
          return null; 
        }
      }
    


    render () {
        console.log(this.props.games)
        const todaysGames = this.props.games.filter(game => game.status !== 'Final')
        console.log(todaysGames)
        
        const gameOptions = todaysGames.map(game => {
                            return(
                                <option htmlFor="game" key={game.id} value={game._id}>{game.home_team}  vs.  {game.away_team}</option>
                            )})
        if (this.props.modalOpen) {
            { if (this.state.game !== 'Select a matchup' && this.state.game !== '') {
                const game = this.props.games.find(game => game._id === this.state.game)
                console.log(game)
            return (
                <div className="modal-open">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Bet Slip</h5>
                        </div>
                        <div className="modal-body">
                                <select onChange={this.handleInput("game")} name="home_team">
                                    <option>Select a matchup</option>
                                    { gameOptions }
                                </select>
                            <br/>
                            <label for="home-team">{game.home_team} {this.printOdds(game.home_odds)}</label>
                            <input id="home-team" onChange={this.handleInput("selection")} type="radio" value="true" name="label"/>
                            <br/>
                            <label for="away-team">{game.away_team} {this.printOdds(game.away_odds)}</label>
                            <input id="away-team" onChange={this.handleInput("selection")} type="radio" name="label"value="false"/>
                            <br/>
                            <label htmlFor="amount">Bet Amount:</label>
                            <input className="amount" onChange={this.handleAmount("amount")} value={this.state.amount}/>
                            <br/>
                            <div className="errors">{this.renderErrors()}</div>
                        </div>
                        <div className="modal-footer">
                            <button className="bet-button" onClick={() => this.handleSubmit()}>Place Bet</button>
                            <button className="bet-button" onClick={this.props.onClose}>Close</button>
                        </div>
                    </div>
                </div>
        )} else {
            return (
                <div className="modal-open">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Bet Slip</h5>
                        </div>
                        <div className="modal-body">
                                <select onChange={this.handleInput("game")} name="home_team">
                                    <option>Select a matchup</option>
                                    { gameOptions }
                                </select>
                        </div>
                    </div>
                </div>
            )}

        }         
    } else {
    return null;
    }
}
}
export default BetModal;