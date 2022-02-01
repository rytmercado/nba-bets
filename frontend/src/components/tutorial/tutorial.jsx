import React from 'react'

class Tutorial extends React.Component {
  constructor(props){
    super(props)
    //this.props.games 

  }

  render(){
    let body; 
    let away_payout;
    let home_payout; 


    if (this.props.away_odds > 0){
      away_payout = (this.props.away_odds/100) * 100 + 100
    } else {
      away_payout = (100/this.props.away_odds) * 100 * -1 + 100 
    }

    if (this.props.home_odds > 0){
      home_payout = (this.props.home_odds/100) * 100 + 100
    } else {
      home_payout = (100/this.props.home_odds) * 100 * -1 + 100 
    }

    home_payout = Math.round(home_payout)
    away_payout = Math.round(away_payout)


    if (this.props.away_odds < this.props.home_odds){

      //the away team is favored

      body = <p>
        The <strong> {this.props.away_team}</strong>  are favored on the road. Use the place bet button to pick your team, wager an amount, and place a bet. Our odds are pulled from nearly a dozen bookkeepers and updated hourly. Payout is for a 100 dollar bet.
      </p>
    } else {
      //the home team is favored 

      body = <p >The <strong> {this.props.home_team} </strong> are favored at home. Use the place bet button to pick your team, wager an amount, and place a bet. Our odds are pulled from nearly a dozen bookkeepers and updated hourly. Payout is for a 100 dollar bet. </p>
    }

    if (this.props.modalOpen){
      return (
        <div className="tutorial-modal-open">
          <div className="tutorial-modal-form">
          <div className="tutorial-modal-header">
            <h5 className="tutorial-modal-title">Help Page</h5>
          </div>
          <div className ="tutorial-modal-body">
            <table className="table">
              <tr>
                <th className="sub-table">Team</th>
                <th className="sub-table">Odds</th>
                <th className="sub-table">Payout</th>
              </tr>
              <tr>
                <td className="sub-table">  {this.props.home_team} </td>
                <td className="sub-table">{this.props.home_odds}</td>
                <td className="sub-table">{home_payout}</td>
              </tr>
              <tr>
                <td className="sub-table"> {this.props.away_team} </td>
                <td className="sub-table">{this.props.away_odds}</td>
                <td className="sub-table">{away_payout}</td>
              </tr>
            </table>
            <p className="help-modal-text">
              {body}
            </p>
          </div>
          <div className="tutorial-modal-footer">
            <button className="bet-button" onClick={this.props.onClose}>Close</button>
          </div>
          </div>
          <div className="modal-screen"></div>
        </div>
      )
    } else {
      return null 
    }
  }
}

export default Tutorial; 


