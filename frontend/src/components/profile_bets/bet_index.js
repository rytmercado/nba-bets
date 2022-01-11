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
        //   console.log(this.props.bets)
            let betsIndex = Object.values(this.props.bets).map( bet => {
                return(
                    <BetIndexItem className="bet-list" key={bet.id} bet={bet} deleteBet={this.props.deleteBet}/>
                )
            })

            let lost = Object.values(this.props.bets).filter( bet => bet.status === "Lost")
            let betsLost = lost.map( bet => {
                return(
                    <BetIndexItem className="bet-list" key={bet.id} bet={bet} deleteBet={this.props.deleteBet}/>
                )
            })

            let won = Object.values(this.props.bets).filter( bet => bet.status === "Won")
            let betsWon = won.map( bet => {
                return(
                    <BetIndexItem className="bet-list" key={bet.id} bet={bet} deleteBet={this.props.deleteBet}/>
                )
            })
        //     return(
        //         <div>{betsIndex}</div>
        //     )
        // }
            return(
                <div>
                    <div className="profile-body-header">MY BETS</div>
                    <div className="bets-nav-bar">
                        <button className="bets-btn">ALL</button>
                        <button className="bets-btn">UNSETTLED</button>
                        <button className="bets-btn">SETTLED</button>
                        <button className="bets-btn">WON</button>
                        <button className="bets-btn">LOST</button>
                    </div>

                    <table>
                        <tr>
                            <th>Selection</th>
                            <th>Amount Bet</th>
                            <th>Payout</th>
                            <th>Status</th>
                        </tr>
                        {betsIndex}
                    </table>
 
                </div>


            )
        }
    }



}

export default BetIndex