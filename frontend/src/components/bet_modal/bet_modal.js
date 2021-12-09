import React from 'react';

class BetModal extends React.Component {
    constructor(props) {
        super(props)
    }


    render () {
        if (!this.props.show) {
            return null
        } else {
            return (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Bet Slip</h5>
                        </div>
                        <div className="modal-body">
                            <h6 className="matchup">Golden State Warriors vs. Los Angeles Lakers</h6>
                            <input type="radio" id="favorite" value="odds" name="odds">-200</input>
                            <input type="radio" id="underdog" value="odds" name="odds">+300</input>
                            <label for="bet-amount">Bet Amount:</label>
                            <input id="bet-mount"></input>
                        </div>
                        <div className="modal-footer">
                            <button className="bet-button">Place Bet</button>
                            <button className="bet-button" onClick={this.props.onClose}>Close</button>
                        </div>
                    </div>
                </div>
        )
    }
}}

export default BetModal;