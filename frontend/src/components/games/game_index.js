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
        const games = this.props.games
        const sortedGames = games.sort(function(a, b) {
            let keyA = new Date(a.start_time)
            let keyB = new Date(b.start_time);
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
            });
        // console.log(sortedGames)

        return (
            <div className="outer-grid">
                { games.map(game => {
                  if (game.home_score === -1){
                    return null
                  } else {
                    return <GameIndexItem clearBetErrors={this.props.clearBetErrors} game={game} key={game._id} />
                  }
                })}
            </div>
        )
    }
}

export default GameIndex;