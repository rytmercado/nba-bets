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
            "Atlanta Hawks": <NBAIcons.ATL size={'100%'}/>,
            "Boston Celtics": <NBAIcons.BOS size={'100%'}/>,
            "Brooklyn Nets": <NBAIcons.BKN size={'100%'}/>,
            "Charlotte Hornets": <NBAIcons.CHA size={'100%'}/>,
            "Chicago Bulls": <NBAIcons.CHI size={'100%'}/>,
            "Cleveland Cavaliers": <NBAIcons.CLE size={'100%'}/>,
            "Dallas Mavericks": <NBAIcons.DAL size={'100%'}/>,
            "Denver Nuggets": <NBAIcons.DEN size={'100%'}/>,
            "Detroit Pistons": <NBAIcons.DET size={'100%'}/>,
            "Golden State Warriors": <NBAIcons.GSW size={'100%'}/>,
            "Houston Rockets": <NBAIcons.HOU size={'100%'}/>,
            "Indiana Pacers": <NBAIcons.IND size={'100%'}/>,
            "Los Angeles Clippers": <NBAIcons.LAC size={'100%'}/>,
            "Los Angeles Lakers": <NBAIcons.LAL size={'100%'}/>,
            "Memphis Grizzlies": <NBAIcons.MEM size={'100%'}/>,
            "Miami Heat": <NBAIcons.MIA size={'100%'}/>,
            "Milwaukee Bucks": <NBAIcons.MIL size={'100%'}/>,
            "Minnesota Timberwolves": <NBAIcons.MIN size={'100%'}/>,
            "New Orleans Pelicans": <NBAIcons.NOP size={'100%'}/>,
            "New York Knicks": <NBAIcons.NYK size={'100%'}/>,
            "Oklahoma City Thunder": <NBAIcons.OKC size={'100%'}/>,
            "Orlando Magic": <NBAIcons.ORL size={'100%'}/>,
            "Philadelphia 76ers": <NBAIcons.PHI size={'100%'}/>,
            "Phoenix Suns": <NBAIcons.PHX size={'100%'}/>,
            "Portland Trail Blazers": <NBAIcons.POR size={'100%'}/>,
            "Sacramento Kings": <NBAIcons.SAC size={'100%'}/>,
            "San Antonio Spurs": <NBAIcons.SAS size={'100%'}/>,
            "Toronto Raptors": <NBAIcons.TOR size={'100%'}/>,
            "Utah Jazz": <NBAIcons.UTA size={'100%'}/>,
            "Washington Wizards": <NBAIcons.WAS size={'100%'}/>
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
                    <div className="stats-box">
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
                    </div>
                    <div className="gamelist-box">
                        <h1 className="gameslist-header">Today's Games</h1>
                        <GamesListContainer games={games}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="game-show">
                    <div className="main-nav">
                        <NavBarContainer/>
                    </div>
                    <div className="stats-box">
                        <DoughnutContainer g={g} />
                        <CurrencyBarContainer g={g} />
                        <BetsBarContainer g={g} />
                    </div>
                    <div className="game-box">
                        <ul className="home-team">
                            {/* <li className="team-name">{g.away_team}</li> */}
                            <li>{NBALogos[g.away_team]}</li>
                            <li className="odds">{g.away_odds}</li>
                        </ul>
                        <i className="at">VS</i>
                        <ul className="away-team">
                            {/* <li className="team-name">{g.home_team}</li> */}
                            <li>{NBALogos[g.home_team]}</li>
                            <li className="odds">{g.home_odds}</li>
                        </ul>
                        <div className="comments-box">
                        <CommentContainer g={g} />
                    </div>
                    </div>
                    <button className="game-bet-btn-locked">
                        Bets Locked!
                    </button>
                    <div className="gamelist-box">
                        <GamesListContainer games={games} />
                    </div>
                </div>
            )
        }
    }
}

export default ShowGame;


