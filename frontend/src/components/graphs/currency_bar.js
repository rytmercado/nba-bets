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

    arrSummer(array) {
        if (array.length < 1) {
            return 0
        } else {
            const reducer = (previousValue, currentValue) => previousValue + currentValue;
            return array.reduce(reducer)
        }           
    }

    componentDidMount() {
            this.props.fetchGameBets(this.props.id).then(res => {
                const bets = this.props.bets;
                const game = this.props.game;
                let home = []
                let away = []
                if (bets.length > 0 && game) {
                    for (let i = 0; i < bets.length; i++) {
                        if (bets[i].selection === game.home_team) {
                            home.push(bets[i].amount) 
                        } else if (bets[i].selection === game.away_team) {
                            away.push(bets[i].amount) 
                        }
                    }
                }
                const homeData = this.arrSummer(home)
                const awayData = this.arrSummer(away)
                const datatwo = {
                labels: ["home", "away"],
                datasets: [{
                    id: 2,
                    label: '$ bet per team',
                    data: [homeData, awayData],
                        backgroundColor: [
                            '#53d337',
                        ],
                        borderColor: [
                        'white',
                        ],
                        borderWidth: .5
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
            });
        }
    
    
    render() {
        const bets = this.props.bets
        const game = this.props.game
        let home = 0
        let away = 0
        if (bets.length > 0 && game) {
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
                        <div className="chart-box2">
                            <canvas id="myBarChart" style={{"width": "150px", "height" : "150px"}}></canvas>
                            <strong id="chart-text">${realHome} dollars bet on {game.home_team} vs. ${realAway} dollars bet on {game.away_team}</strong> 
                        </div>
                )
    } else if (bets.length === 0 && game) {
        return (
            <div className="chart-box2">
                <strong id="no-chart-text">No bets on this game yet! Make a bet to see some data.</strong>
            </div>
        )
    } else {
        return null
    }
}
}

export default CurrencyBar;