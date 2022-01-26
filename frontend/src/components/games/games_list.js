import GamesListItemContainer from './games_list_item_container';
import React from 'react';

class GamesList extends React.Component {
    constructor(props) {
        super(props)

    }

    render () {
        console.log(this.props.games)
        const games = this.props.games
        return (
            <div className="gameslist">
                {games.map(game => <GamesListItemContainer key={game._id} game={game} />)}
            </div>
        )
        

            
        
        
}
}
export default GamesList; 