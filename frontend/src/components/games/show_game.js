import React from 'react';


class ShowGame extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchGame(this.props.match.params.id)
        console.log(this.props.game)
    }

    render () {
    
        if (this.props.game === undefined){
            return null
        } 
        return (
            <ul>
                <li>{this.props.game.home_team}</li>
                <li>{this.props.game.away_team}</li>
            </ul>
        )
    }
}

export default ShowGame;