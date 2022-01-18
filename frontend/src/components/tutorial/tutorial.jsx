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

      body = `The ${this.props.away_team} are favored. A 100 dollar bet on them would result in a total payout of ${away_payout}. The ${this.props.home_team} aren't expected to win,
      and will have a bigger payout ${home_payout}. Use the place bet button to pick your team!`
    } else {
      //the home team is favored 

      body = `The ${this.props.home_team} are favored. Because they are the favorites, 
      a 100 dollar bet on them would result in a total payout of ${home_payout}. The ${this.props.away_team} aren't expected to win,
      and will have a bigger payout ${away_payout}. Use the place bet button to pick your team!.`
    }

    if (this.props.modalOpen){
      return (
        <div className="tutorial-modal-open">
          <div className="tutorial-modal-form">
          <div className="tutorial-modal-header">
            <h5 className="tutorial-modal-title">Help Page</h5>
          </div>
          <div className ="tutorial-modal-body">
            <p>
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


