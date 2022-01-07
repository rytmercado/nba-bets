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
        return (
            // <div className="game-index-container">
            //     <div className="game">

            //         <div className="game-header">
            //             <div className="nba-game-logo">
            //                 <img src={nba_logo}></img>
            //                 National Basketball League
            //             </div>
            //         </div>
                    
            //         <div className="game-content">
            //             <div className="column">
            //                 <div className="team team--home">
            //                     <div className="team-logo">
            //                         <NBAIcons.GSW />
            //                         {/* <img src={warriors_logo} alt="home-team"></img> */}
            //                     </div>
            //                     <h2 className="team-name">Golden State Warriors</h2>
            //                     <button className="game-bet-odds">-1000</button>
            //                 </div>
            //             </div>

            //             <div className="column">
            //                 <div className="game-details">
            //                     <div className="game-date">
            //                         25 Dec at <strong>7:30PM PST</strong>
            //                     </div>
            //                     <div className="game-score">
            //                         <span className="game-score-number game-score-number--leading" >100</span>
            //                         <span className="game-score-divider">:</span>
            //                         <span className="game-score-number">10</span>
            //                     </div>
            //                     <div className="game-period">
            //                         Q2
            //                     </div>
            //                     <div className="game-status">Live</div> 
            //                     <div className="game-bet">
            //                         <button className="game-bet-btn">Place Bet</button>
            //                     </div>
            //                 </div>

            //             </div>


            //             <div className="column">
            //                 <div className="team team--away">
            //                     <div className="team-logo">
            //                     <NBAIcons.LAL />
            //                         {/* <img src={lakers_logo} alt="away-team"></img> */}
            //                     </div>
            //                     <h2 className="team-name">Los Angeles Lakers</h2>
            //                     <button className="game-bet-odds">+1000</button>
            //                 </div>
            //             </div>

            //         </div>
            //     </div>
            // </div>


            <div className="outer-grid">
                { games.map(game => <GameIndexItem game={game} key={game._id} />)}
            </div>
        )

    }
}

export default GameIndex;