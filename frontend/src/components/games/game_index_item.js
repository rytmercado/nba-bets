import React from 'react'


class GameIndexItem extends React.Component {
    constructor(props) {
        super(props);

    }

 


    render() {
        let game = this.props.game;
                return (
                    <div className="game-index-item-grid">
                        <div className="team">{game.away_team}</div>
                        <div className="odds">{game.away_odds}</div>
                        <div className="team">{game.home_team}</div>
                        <div className="odds">{game.home_odds}</div>
                    </div>
                )
            }
    
}

export default GameIndexItem;