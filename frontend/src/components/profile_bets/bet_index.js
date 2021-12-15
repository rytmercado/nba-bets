import React from 'react';
import { Link } from 'react-router-dom';
import BetIndexItem from './bet_index_item';

class BetIndex extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        if(!!this.props.bets){
          console.log(this.props.bets)
            let betsIndex = Object.values(this.props.bets).map( bet => {
                return(
                    <BetIndexItem className="bet-list" key={bet.id} bet={bet} deleteBet={this.props.deleteBet}/>
                )
            })
                // console.log(this.props.bets[0])
                // console.log(this.props.bets[0].amount)
                // console.log(this.props.bets[0].payout)
                // console.log(this.props.bets[0].selection)
                // console.log(this.props.bets[0].status)
                // console.log(this.props.bets[0].createdAt)
            // }
            return(
                <div> {betsIndex}</div>
            )
        }
    }



}

export default BetIndex