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
    if (this.props.modalOpen){
      return (
        <div className="modal-open">
          <div className="TutorialContainer">
            <p>
              Here is help!
            </p>
          </div>
        </div>
      )
    } else {
      return null 
    }
  }
}

export default Tutorial; 

