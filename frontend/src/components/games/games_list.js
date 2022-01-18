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
            <div className="outer-grid">
                {games.map(game => <GamesListItemContainer key={game._id} id={game._id} />)}
            </div>
        )
        

            
        
        
}
}
export default GamesList; 