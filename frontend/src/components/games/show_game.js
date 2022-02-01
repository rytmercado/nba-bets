import React from 'react';
import * as NBAIcons from 'react-nba-logos';
import  CommentContainer  from '../comments/comment_container';
import CountDownContainer from '../count_down/count_down_container';
import NavBarContainer from '../nav/navbar_container';
import DoughnutContainer from '../graphs/doughnut_container';
import CurrencyBarContainer from '../graphs/currency_container'
import GamesListContainer from '../games/games_list_container';
import BetsBarContainer from '../graphs/bets_bar_container'
import BigBetModalContainer from '../bet_modal/big_bet_modal_container'
import BigGameModalContainer from '../bet_modal/big_game_modal_container';
import GameModalContainer from '../bet_modal/game_modal_container'



class ShowGame extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchAllGames();
    }

    render () {
        const games = this.props.games;
        const NBALogos = {
            "Atlanta Hawks": <NBAIcons.ATL />,
            "Boston Celtics": <NBAIcons.BOS />,
            "Brooklyn Nets": <NBAIcons.BKN />,
            "Charlotte Hornets": <NBAIcons.CHA />,
            "Chicago Bulls": <NBAIcons.CHI />,
            "Cleveland Cavaliers": <NBAIcons.CLE />,
            "Dallas Mavericks": <NBAIcons.DAL />,
            "Denver Nuggets": <NBAIcons.DEN />,
            "Detroit Pistons": <NBAIcons.DET />,
            "Golden State Warriors": <NBAIcons.GSW />,
            "Houston Rockets": <NBAIcons.HOU />,
            "Indiana Pacers": <NBAIcons.IND />,
            "Los Angeles Clippers": <NBAIcons.LAC />,
            "Los Angeles Lakers": <NBAIcons.LAL />,
            "Memphis Grizzlies": <NBAIcons.MEM />,
            "Miami Heat": <NBAIcons.MIA />,
            "Milwaukee Bucks": <NBAIcons.MIL />,
            "Minnesota Timberwolves": <NBAIcons.MIN />,
            "New Orleans Pelicans": <NBAIcons.NOP />,
            "New York Knicks": <NBAIcons.NYK />,
            "Oklahoma City Thunder": <NBAIcons.OKC />,
            "Orlando Magic": <NBAIcons.ORL />,
            "Philadelphia 76ers": <NBAIcons.PHI/>,
            "Phoenix Suns": <NBAIcons.PHX />,
            "Portland Trail Blazers": <NBAIcons.POR />,
            "Sacramento Kings": <NBAIcons.SAC />,
            "San Antonio Spurs": <NBAIcons.SAS />,
            "Toronto Raptors": <NBAIcons.TOR />,
            "Utah Jazz": <NBAIcons.UTA />,
            "Washington Wizards": <NBAIcons.WAS />
        }
        const g = games.find(game => game._id === this.props.match.params.id);
        if (games.length === 0){
            return null
        } else if (g.status === 'Incomplete') {
            return (
                <div>
                    <div className="main-nav">
                        <NavBarContainer/>
                    </div>
                    <br/>
                    <div className="gamelist-box">
                        <GamesListContainer games={games}/>
                    </div>
                    <br/>
                    <div className="game-box">
                        <BigBetModalContainer g={g}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="main-nav">
                        <NavBarContainer/>
                    </div>
                    <br/>
                    <div className="gamelist-box">
                        <GamesListContainer games={games}/>
                    </div>
                    <br/>
                    <div className="game-box">
                        <BigGameModalContainer g={g}/>
                    </div>
                </div>
            )
        }
    }
}

export default ShowGame;


