import React from 'react';
import * as NBAIcons from 'react-nba-logos';
import  CommentContainer  from '../comments/comment_container';
import CountDownContainer from '../count_down/count_down_container';
import NavBarContainer from '../nav/navbar_container';
import DoughnutContainer from '../graphs/doughnut_container';
import CurrencyBarContainer from '../graphs/currency_container'
import GamesListContainer from '../games/games_list_container';
import BetsBarContainer from '../graphs/bets_bar_container'


class ShowGame extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
            this.props.fetchAllGames();
    }

    render () {
        const games = this.props.games;
        console.log(games)
        const NBALogos = {
            "Atlanta Hawks": <NBAIcons.ATL size={5}/>,
            "Boston Celtics": <NBAIcons.BOS size={5}/>,
            "Brooklyn Nets": <NBAIcons.BKN size={5}/>,
            "Charlotte Hornets": <NBAIcons.CHA size={5}/>,
            "Chicago Bulls": <NBAIcons.CHI size={5}/>,
            "Cleveland Cavaliers": <NBAIcons.CLE size={5}/>,
            "Dallas Mavericks": <NBAIcons.DAL size={5}/>,
            "Denver Nuggets": <NBAIcons.DEN size={5}/>,
            "Detroit Pistons": <NBAIcons.DET size={5}/>,
            "Golden State Warriors": <NBAIcons.GSW size={5}/>,
            "Houston Rockets": <NBAIcons.HOU size={5}/>,
            "Indiana Pacers": <NBAIcons.IND size={5}/>,
            "Los Angeles Clippers": <NBAIcons.LAC size={5}/>,
            "Los Angeles Lakers": <NBAIcons.LAL size={5}/>,
            "Memphis Grizzlies": <NBAIcons.MEM size={5}/>,
            "Miami Heat": <NBAIcons.MIA size={5}/>,
            "Milwaukee Bucks": <NBAIcons.MIL size={5}/>,
            "Minnesota Timberwolves": <NBAIcons.MIN size={5}/>,
            "New Orleans Pelicans": <NBAIcons.NOP size={5}/>,
            "New York Knicks": <NBAIcons.NYK size={5}/>,
            "Oklahoma City Thunder": <NBAIcons.OKC size={5}/>,
            "Orlando Magic": <NBAIcons.ORL size={5}/>,
            "Philadelphia 76ers": <NBAIcons.PHI size={5}/>,
            "Phoenix Suns": <NBAIcons.PHX size={5}/>,
            "Portland Trail Blazers": <NBAIcons.POR size={5}/>,
            "Sacramento Kings": <NBAIcons.SAC size={5}/>,
            "San Antonio Spurs": <NBAIcons.SAS size={5}/>,
            "Toronto Raptors": <NBAIcons.TOR size={5}/>,
            "Utah Jazz": <NBAIcons.UTA size={5}/>,
            "Washington Wizards": <NBAIcons.WAS size={5}/>
        }
        const g = this.props.games.find(game => game._id === this.props.match.params.id);
        if (g === undefined || games.length === 0){
            return null
        } else if (g.status === 'Incomplete') {
            return (
                <div className="game-show">
                    <div className="main-nav">
                        <NavBarContainer/>
                    </div>
                    <div className="gamelist-box">
                        <GamesListContainer games={games}/>
                    </div>
                    {/* <div className="stats-box">
                        <h1 className="stats-header">Game Stats</h1>
                        <DoughnutContainer g={g} />
                        <CurrencyBarContainer g={g} />
                        <BetsBarContainer g={g} />
                    </div>
                    <div className="game-box">
                    <ul className="home-team">
                            {NBALogos[g.away_team]}
                            <li className="odds">{g.away_odds}</li>
                        </ul>
                        <i className="at">VS</i>
                        <ul className="away-team">
                            {NBALogos[g.home_team]}
                            <li className="odds">{g.home_odds}</li>
                        </ul>
                        <div className="comments-box">
                            <CommentContainer g={g} />
                        </div>
                    </div> */}
                </div>
            )
        } else {
            return (
                <div className="game-show">
                    <div className="main-nav">
                        <NavBarContainer/>
                    </div>
                    <div className="gamelist-box">
                        <GamesListContainer games={games}/>
                    </div>
                </div>
            )
        }
    }
}

export default ShowGame;


