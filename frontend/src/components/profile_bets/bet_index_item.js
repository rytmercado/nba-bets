import React from 'react';
import { Link } from 'react-router-dom';

const BetIndexItem = (props) => {
    return(
            <div className="bet-container">
                <span className="inline">{props.bet.selection}</span>
                <span className="inline">{props.bet.amount}</span>
                <span className="inline">{props.bet.payout}</span>
                <span className="inline">{props.bet.status}</span>
                <span className="inline">{props.bet.createdAt}</span>
            </div>
    )
}

export default BetIndexItem