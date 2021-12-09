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

                    </div>
                    <div className="modal-footer">
                        <button className="bet-button">Place Bet</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BetModal; 