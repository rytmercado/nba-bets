import React from 'react'

class Tutorial extends React.Component {
  constructor(props){
    super(props)
    //this.props.games 

  }

  // tutorial should render as you open your first bet modal, then optionally render if
  //you press a help button
  //It should explain the odds and by extension calculate payout.
  //

  

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

      body = `The ${this.props.away_team} are favored on the road. Use the place bet button to pick your team! Our odds are pulled from nearly a dozen bookeepers and updated hourly.
      `
    } else {
      //the home team is favored 

      body = `The ${this.props.home_team} are favored at home. Use the place bet button to pick your team! Our odds are pulled from nearly a dozen bookeepers and updated hourly.
      `
    }

    if (this.props.modalOpen){
      return (
        <div className="tutorial-modal-open">
          <div className="tutorial-modal-form">
          <div className="tutorial-modal-header">
            <h5 className="tutorial-modal-title">Help Page</h5>
          </div>
          <div className ="tutorial-modal-body">
            <table>
              <tr>
                <th>Team</th>
                <th>Odds</th>
                <th>Payout</th>
              </tr>
              <tr>
                <td> {this.props.home_team} </td>
                <td>{this.props.home_odds}</td>
                <td>{home_payout}</td>
              </tr>
              <tr>
                <td> {this.props.away_team} </td>
                <td>{this.props.away_odds}</td>
                <td>{away_payout}</td>
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
        </div>
      )
    } else {
      return null 
    }
  }
}

export default Tutorial; 


