import React from 'react';

class BetModal extends React.Component {
    constructor(props) {
        super(props)

        console.log(this.props.games)
    }

    render () {
        console.log(this.props.games)
        const todaysGames = this.props.games.filter(game => game.status !== 'Final')
        console.log(todaysGames)
        
        const gameOptions = todaysGames.map(game => {
                            return(
                                <option value={game.home_team}>{game.home_team}  vs.  {game.away_team}</option>
                            )})
        if (this.props.modalOpen) {
            return (
                <div className="modal-open">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Bet Slip</h5>
                        </div>
                        <div className="modal-body">
                        <label for="games">Choose a game:</label>
                            <select name="home_team">
                                { gameOptions }
                            </select>
                            <input type="radio" id="underdog" value="odds" name="odds"/>
                            <label for="bet-amount">Bet Amount:</label>
                            <input id="bet-amount"/>
                        </div>
                        <div className="modal-footer">
                            <button className="bet-button">Place Bet</button>
                            <button className="bet-button" onClick={this.props.onClose}>Close</button>
                        </div>
                    </div>
                </div>
        )} else {
            return null
        }         
}}

export default BetModal;