import React from 'react';
import GameIndexItem from './game_index_item'



class GameIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount () {
        this.props.fetchAllGames()                  
    }

    render () {
        const games = this.props.games.filter(game => game.status !== 'Final')
        return (
            <div className="outer-grid">
            { games.map(game => <GameIndexItem game={game} key={game._id} />
            )}
            </div>
        )

    }
}

export default GameIndex;