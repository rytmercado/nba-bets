import GamesListItemContainer from './games_list_item_container';
import React from 'react';

class GamesList extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount () {
        this.props.fetchAllGames()   
    }

    render () {
        const games = this.props.games
        console.log(this.props.games)

            return (
                <div className="outer-grid">
                    {games.map(game => <GamesListItemContainer game={game} key={game._id} id={game._id} />)}
                </div>
        )
        
}
}
export default GamesList; 