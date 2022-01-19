import React from 'react';
import BetIndexItem from './bet_index_item';
import GraphContainer from '../profile_graph/graph_container';

class BetIndex extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            betSelection: "ALL"
        }

        this.allBets = this.allBets.bind(this)
        this.unsettledBets = this.unsettledBets.bind(this)
        this.settledBets = this.settledBets.bind(this)
        this.betsWon = this.betsWon.bind(this)
        this.betsLost = this.betsLost.bind(this)
        this.renderGraph = this.renderGraph.bind(this)

    }

    renderGraph(){
      this.setState({betSelection: "GRAPH"})
    }

    allBets(){
        this.setState({ betSelection: "ALL"})
    }

    unsettledBets(){
        this.setState({ betSelection: "UNSETTLED"})
    }

    settledBets(){
        this.setState({ betSelection: "SETTLED"})
    }

    betsWon(){
        this.setState({ betSelection: "WON"})
    }

    betsLost(){
        this.setState({ betSelection: "LOST"})
    }

    render(){
        if(!!this.props.bets){
            let betsIndex;
            let graphIndex;
            let table; 
            let renderTable = true; 
            if(this.state.betSelection === "ALL"){
                betsIndex = Object.values(this.props.bets).reverse().map( bet => {
                return(
                    <BetIndexItem className="bet-list" key={bet.id} bet={bet} deleteBet={this.props.deleteBet}/>
                )
                })
            } else if(this.state.betSelection === "LOST") {
                let lost = Object.values(this.props.bets).reverse().filter( bet => bet.status === "Lost");
                betsIndex = lost.map( bet => {
                return(
                    <BetIndexItem className="bet-list" key={bet.id} bet={bet} deleteBet={this.props.deleteBet}/>
                )
                })
            } else if(this.state.betSelection === "WON"){
                let won = Object.values(this.props.bets).reverse().filter( bet => bet.status === "Won");
                betsIndex = won.map( bet => {
                return(
                    <BetIndexItem className="bet-list" key={bet.id} bet={bet} deleteBet={this.props.deleteBet}/>
                )
                })
            } else if(this.state.betSelection === "UNSETTLED"){
                let unsettled = Object.values(this.props.bets).reverse().filter( bet => {
                    return (bet.status === "Incomplete" || bet.status === "Game In Progress")
                });
                betsIndex = unsettled.map( bet => {
                return(
                    <BetIndexItem className="bet-list" key={bet.id} bet={bet} deleteBet={this.props.deleteBet}/>
                )
                })
            } else if(this.state.betSelection === "SETTLED"){
                let settled = Object.values(this.props.bets).reverse().filter( bet => {
                    return (bet.status === "Won" || bet.status === "Lost")
                });
                betsIndex = settled.map( bet => {
                return(
                    <BetIndexItem className="bet-list" key={bet.id} bet={bet} deleteBet={this.props.deleteBet}/>
                )
                })
            } else if (this.state.betSelection === "GRAPH"){
              graphIndex = 
                <GraphContainer className="bet-list" />
              renderTable = false; 
            }
            if (renderTable){
             table = 
              <table className="table-container">
              <tr className="header-container">
                  <th className="inline-headers">Selection</th>
                  <th className="inline-headers">Amount Bet</th>
                  <th className="inline-headers">Potential Payout</th>
                  <th className="inline-headers">Status</th>
                  <th className="inline-headers">Created At</th>
              </tr>
              {betsIndex}
          </table>
            }


            return(
                <>
                    <div className="profile-body-header">MY BETS</div>
                    <div className="bets-nav-bar">
                        <button onClick={this.allBets} className={(this.state.betSelection === "ALL" ? "bets-btn-selected" : "bets-btn")}>ALL</button>
                        <button onClick={this.unsettledBets} className={(this.state.betSelection === "UNSETTLED" ? "bets-btn-selected" : "bets-btn")}>UNSETTLED</button>
                        <button onClick={this.settledBets} className={(this.state.betSelection === "SETTLED" ? "bets-btn-selected" : "bets-btn")}>SETTLED</button>
                        <button onClick={this.betsWon} className={(this.state.betSelection === "WON" ? "bets-btn-selected" : "bets-btn")}>WON</button>
                        <button onClick={this.betsLost} className={(this.state.betSelection === "LOST" ? "bets-btn-selected" : "bets-btn")}>LOST</button>
                        <button onClick={this.renderGraph} className={(this.state.betSelection === "GRAPH" ? "bets-btn-selected" : "bets-btn")}>MONEY GRAPH</button>
                    </div>

                    {table}

                    {graphIndex}
 
                </>


            )
        }
    }



}

export default BetIndex