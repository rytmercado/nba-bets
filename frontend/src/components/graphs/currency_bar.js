import React from "react";
import Chart from 'chart.js/auto';
import { getGames } from "../../util/game_api_util";


class CurrencyBar extends React.Component {
    constructor(props){
        super(props)
        
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    componentDidMount() {
            this.props.fetchGameBets(this.props.id);
            const bets = this.props.bets;
            const game = this.props.game;
            if (bets && game) {
                let home = 0
                let away = 0
                for (let i = 0; i < bets.length; i++) {
                        if (bets[i].selection === game.home_team) {
                            home += bets[i].amount;
                            
                        } else {
                            away += bets[i].amount;
                        }
                    }
                const homeData = home;
                const awayData = away;
                    const datatwo = {
                        labels: ["home", "away"],
                        datasets: [{
                            id: 2,
                            label: 'Bets per Team',
                            data: [homeData, awayData],
                            backgroundColor: [
                                'rgb(0, 0, 0)',
                                '#53d337',
                            ],
                            borderColor: [
                            'rgb(0, 0, 0)',
                            '#53d337',
                            ],
                            borderWidth: 5
                        }]
                    }
            
                    
            
                    const configtwo = {
                        type: 'bar',
                        data: datatwo,
                        options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                                }
                            }
                        },
                    }
                    const myBarChart = new Chart(
                        document.getElementById('myBarChart'),
                        configtwo,
                    )
            }
    }
    
    
    render() {
        const bets = this.props.bets
        const game = this.props.game
        let home = 0
        let away = 0
        if (bets && game) {
            for (let i = 0; i < bets.length; i++) {
                    if (bets[i].selection === game.home_team) {
                        home += bets[i].amount
                        
                    } else {
                        away += bets[i].amount
                    }
                }
                const realHome = this.numberWithCommas(home)
                const realAway = this.numberWithCommas(away)
                return (
                        <div className="chart-box">
                            <div className="chart">
                                <canvas id="myBarChart" style={{"width": "150px", "height" : "150px"}}></canvas>
                                <strong id="chart-text">${realHome} dollars bet on {game.home_team} vs. ${realAway} dollars bet on {game.away_team}</strong>
                            </div>     
                        </div>
                )
    }
}
}

export default CurrencyBar;