import React from 'react';
import * as NBAIcons from 'react-nba-logos';
import  CommentContainer  from '../comments/comment_container';
import CountDownContainer from '../count_down/count_down_container';
import NavBarContainer from '../nav/navbar_container';
import DoughnutContainer from '../graphs/doughnut_container';
import CurrencyBarContainer from '../graphs/currency_container'
import GameListContainer from '../games/games_list_container';

class ShowGame extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
            this.props.fetchGame(this.props.match.params.id)
    }

    renderGames() {
        this.props.fetchGames().then()
    }


    render () {
        console.log(this.props.game)
        const NBALogos = {
            "Atlanta Hawks": <NBAIcons.ATL size={400}/>,
            "Boston Celtics": <NBAIcons.BOS size={400}/>,
            "Brooklyn Nets": <NBAIcons.BKN size={400}/>,
            "Charlotte Hornets": <NBAIcons.CHA size={400}/>,
            "Chicago Bulls": <NBAIcons.CHI size={400}/>,
            "Cleveland Cavaliers": <NBAIcons.CLE size={400}/>,
            "Dallas Mavericks": <NBAIcons.DAL size={400}/>,
            "Denver Nuggets": <NBAIcons.DEN size={400}/>,
            "Detroit Pistons": <NBAIcons.DET size={400}/>,
            "Golden State Warriors": <NBAIcons.GSW size={400}/>,
            "Houston Rockets": <NBAIcons.HOU size={400}/>,
            "Indiana Pacers": <NBAIcons.IND size={400}/>,
            "Los Angeles Clippers": <NBAIcons.LAC size={400}/>,
            "Los Angeles Lakers": <NBAIcons.LAL size={400}/>,
            "Memphis Grizzlies": <NBAIcons.MEM size={400}/>,
            "Miami Heat": <NBAIcons.MIA size={400}/>,
            "Milwaukee Bucks": <NBAIcons.MIL size={400}/>,
            "Minnesota Timberwolves": <NBAIcons.MIN size={400}/>,
            "New Orleans Pelicans": <NBAIcons.NOP size={400}/>,
            "New York Knicks": <NBAIcons.NYK size={400}/>,
            "Oklahoma City Thunder": <NBAIcons.OKC size={400}/>,
            "Orlando Magic": <NBAIcons.ORL size={400}/>,
            "Philadelphia 76ers": <NBAIcons.PHI size={400}/>,
            "Phoenix Suns": <NBAIcons.PHX size={400}/>,
            "Portland Trail Blazers": <NBAIcons.POR size={400}/>,
            "Sacramento Kings": <NBAIcons.SAC size={400}/>,
            "San Antonio Spurs": <NBAIcons.SAS size={400}/>,
            "Toronto Raptors": <NBAIcons.TOR size={400}/>,
            "Utah Jazz": <NBAIcons.UTA size={400}/>,
            "Washington Wizards": <NBAIcons.WAS size={400}/>
        }
        const g = this.props.game;
        if (g === undefined){
            return null
        } else if (g.status === 'Incomplete') {
            return (
                <div className="game-show">
                    <div className="main-nav">
                        <NavBarContainer/>
                    </div>
                    <div className="stats-box">
                        <DoughnutContainer g={g} />
                        <CurrencyBarContainer g={g} />
                    </div>
                    <div className="game-box">
                        <ul className="home-team">
                            <li className="team-name">{g.home_team}</li>
                            {NBALogos[g.home_team]}
                            <li className="odds">{g.home_odds}</li>
                        </ul>
                        <i className="at">VS</i>
                        <ul className="away-team">
                            <li className="team-name">{g.away_team}</li>
                            {NBALogos[g.away_team]}
                            <li className="odds">{g.away_odds}</li>
                        </ul>
                    </div>
                    <CountDownContainer g={g} />
                    <div className="gamelist-box">
                        <GameListContainer id={g._id}/>
                    </div>
                    <div className="comments-box">
                        <CommentContainer g={g} />
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
                    </div>
                    <div className="game-box">
                        <ul className="home-team">
                            <li className="team-name">{g.home_team}</li>
                            {NBALogos[g.home_team]}
                            <li className="odds">{g.home_odds}</li>
                        </ul>
                        <i className="at">VS</i>
                        <ul className="away-team">
                            <li className="team-name">{g.away_team}</li>
                            {NBALogos[g.away_team]}
                            <li className="odds">{g.away_odds}</li>
                        </ul>
                    </div>
                    <button className="game-bet-btn-locked">
                        Bets Locked!
                    </button>
                    <div className="gamelist-box">
                        <GameListContainer id={g._id}/>
                    </div>
                    <div className="comments-box">
                        <CommentContainer g={g} />
                    </div>
                </div>
            )
        }
    }
}

export default ShowGame;