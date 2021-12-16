import React from 'react';
import * as NBALogos from '../../../../assets/photos';


class ShowGame extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchGame(this.props.match.params.id)
        console.log(this.props.game)
    }

    render () {
        const g = this.props.game;
        if (this.props.game === undefined){
            return null
        } 
        return (
            <div className="game-show">
                <ul className="teams">
                    <li>{g.home_team}</li>
                    <img className="NBAlogo" src={`/../../../../assets/photos/${g.home_team}.JPG`} />
                    <li>{g.away_team}</li>
                    <img className="NBAlogo" src={`/../../../../assets/photos/${g.away_team}.JPG`} />
                </ul>
                <ul className="odds">
                    <li>{g.home_odds}</li>
                    <li>{g.away_odds}</li>
                </ul>

            </div>
        )
    }
}

export default ShowGame;