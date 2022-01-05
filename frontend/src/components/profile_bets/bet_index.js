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
        if(!!this.props.bets){
          console.log(this.props.bets)
            let betsIndex = Object.values(this.props.bets).map( bet => {
                return(
                    <BetIndexItem className="bet-list" key={bet.id} bet={bet} deleteBet={this.props.deleteBet}/>
                )
            })
            return(
                <div>{betsIndex}</div>
            )
        }
        }



}

export default BetIndex