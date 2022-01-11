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
        console.log(this.props.bet.createdAt)
        if(this.state.status){
            return(
                <>
                    <tr className="bet-container">
                        <td className="inline">{this.props.bet.selection}</td>
                        <td className="inline">{this.props.bet.amount}</td>
                        <td className="inline">{this.props.bet.payout}</td>
                        <td className="inline">{this.props.bet.status}</td>
                        {/* <td className="inline">{}</td> */}
                        {/* <span className="inline">{this.props.bet.createdAt}</span> */}
                        <button className={(this.props.bet.status === "Incomplete" ? "delete-bet-btn" : "delete-bet-btn-hidden")} onClick={this.onDelete}>REMOVE BET?</button>
                    </tr>
                </>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default BetIndexItem