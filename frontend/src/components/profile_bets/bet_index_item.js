import React from 'react';
import { Link } from 'react-router-dom';

class BetIndexItem extends React.Component{
    constructor(props){
        super(props)

        this.onDelete = this.onDelete.bind(this)
        
        this.state = {
            status: true
        }
    }

    onDelete(){
        const {bet, deleteBet} = this.props
        deleteBet(bet._id)
        this.setState({
            status: false
        })
    }
    
    render(){
        if(this.state.status){
            return(
                    <div className="bet-container">
                        <span className="inline">{this.props.bet.selection}</span>
                        <span className="inline">{this.props.bet.amount}</span>
                        <span className="inline">{this.props.bet.payout}</span>
                        <span className="inline">{this.props.bet.status}</span>
                        {/* <span className="inline">{this.props.bet.createdAt}</span> */}
                        <button className="delete-bet-btn" onClick={this.onDelete}>REMOVE BET</button>
                    </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default BetIndexItem