import React from 'react';
import * as NBAIcons from 'react-nba-logos';


class ShowGame extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchGame(this.props.match.params.id)
        console.log(this.props.game)
    }

    render () {
        const NBALogos = {
            "Atlanta Hawks": <NBAIcons.ATL/>,
            "Boston Celtics": <NBAIcons.BOS/>,
            "Brooklyn Nets": <NBAIcons.BKN/>,
            "Charlotte Hornets": <NBAIcons.CHA/>,
            "Chicago Bulls": <NBAIcons.CHI/>,
            "Cleveland Cavaliers": <NBAIcons.CLE/>,
            "Dallas Mavericks": <NBAIcons.DAL/>,
            "Denver Nuggets": <NBAIcons.DEN/>,
            "Detroit Pistons": <NBAIcons.DET/>,
            "Golden State Warriors": <NBAIcons.GSW/>,
            "Houston Rockets": <NBAIcons.HOU/>,
            "Indiana Pacers": <NBAIcons.IND/>,
            "Los Angeles Clippers": <NBAIcons.LAC/>,
            "Los Angeles Lakers": <NBAIcons.LAL/>,
            "Memphis Grizzlies": <NBAIcons.MEM/>,
            "Miami Heat": <NBAIcons.MIA/>,
            "Milwaukee Bucks": <NBAIcons.MIL/>,
            "Minnesota Timberwolves": <NBAIcons.MIN/>,
            "New Orleans Pelicans": <NBAIcons.NOP/>,
            "New York Knicks": <NBAIcons.NYK/>,
            "Oklahoma City Thunder": <NBAIcons.OKC/>,
            "Orlando Magic": <NBAIcons.ORL/>,
            "Philadelphia 76ers": <NBAIcons.PHI/>,
            "Phoenix Suns": <NBAIcons.PHX/>,
            "Portland Trail Blazers": <NBAIcons.POR/>,
            "Sacramento Kings": <NBAIcons.SAC/>,
            "San Antonio Spurs": <NBAIcons.SAS/>,
            "Toronto Raptors": <NBAIcons.TOR/>,
            "Utah Jazz": <NBAIcons.UTA/>,
            "Washington Wizards": <NBAIcons.WAS/>
        }
        const g = this.props.game;
        if (this.props.game === undefined){
            return null
        } 
        return (
            <div className="game-show">
                <ul className="teams">
                    <li>{g.home_team}</li>
                    <NBAIcons>
                    <li>{g.away_team}</li>
                    <img className="NBAlogo" src={`/../../../../assets/photos/${g.away_team}.JPG`} />
                </ul>
                <ul className="odds">
                    <li>{g.home_odds}</li>
                    <li>{g.away_odds}</li>
                </ul>

            </div>
        )
    }
}

export default ShowGame;