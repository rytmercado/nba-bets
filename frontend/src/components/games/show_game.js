import React from 'react';


class ShowGame extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {

        this.props.fetchGame(this.props.match.params.id)

    }

    render () {
    
        if (this.props.game === undefined){
            return null
        } 
        return (
            <h1>{this.props.game.home_team} vs. {this.props.game.away_team}</h1>
        )
    }
}

export default ShowGame;