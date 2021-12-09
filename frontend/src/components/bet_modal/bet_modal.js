import React from 'react';

class BetModal extends React.Component {
    constructor(props) {
        super(props)
    }


    render () {
            return (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Bet Slip</h5>
                        </div>
                        <div className="modal-body">
                            <h6 className="matchup">Golden State Warriors vs. Los Angeles Lakers</h6>
                            <label for="favorite">-200</label>
                            <input type="radio" id="favorite" value="odds" name="odds"/>
                            <label for="underdog">+300</label>
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
        )
    }
}

export default BetModal;