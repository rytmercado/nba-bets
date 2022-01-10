import React from 'react'

class BetIndex extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      bets: []
    }
  }

  componentDidMount(){
    this.props.getBetsThroughGame(this)
  }
}

export default BetIndex; 