import React from 'react';
import { Link } from 'react-router-dom';

class GameIndexItem extends React.Component {
    constructor(props) {
        super(props);

    }

    
 


    render() {
        let game = this.props.game;
                return (
                    <div className="game-index">
                        <div className="game-index-item-grid">
                            <div className="team">{game.away_team}</div>
                            <div className="odds">{game.away_odds}</div>
                            <div className="team">{game.home_team}</div>
                            <div className="odds">{game.home_odds}</div>
                            <Link to={`/game/show/${game._id}`}>Game Log</Link>
                        </div>
    
                    </div>
                )
            }
    
}

export default GameIndexItem;