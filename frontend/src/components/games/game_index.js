import React from 'react';
import GameIndexItem from './game_index_item'

import nba_logo from '../../images/nba.png';
import lakers_logo from '../../images/lakers.png';
import warriors_logo from '../../images/warriors.png';

import * as NBAIcons from 'react-nba-logos';


class GameIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount () {
        this.props.fetchAllGames()                  
    }

    render () {
      //Games are filtered by date on the backend
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
                { games.map(game => <GameIndexItem clearBetErrors={this.props.clearBetErrors} game={game} key={game._id} />)}
            </div>
        )

    }
}

export default GameIndex;