import React from 'react';
import { Link } from 'react-router-dom';
import BetIndexItem from './bet_index_item';

class BetIndex extends React.Component {
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    //     this.props.getBets(this.props.currentUser.id)
    // }

    render(){
        console.log(this.props)
        if(!this.props.bets){
            return null
        }
        let betsIndex = this.props.bets.map( bet => {
            return(
                <BetIndexItem className="bet-list" key={bet.id} bet={bet} deleteBet={this.props.deleteBet}/>
            )
        })
        return(
            <div> {betsIndex}</div>
        )
        }



}

export default BetIndex