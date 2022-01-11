import React from "react";
import Chart from 'chart.js/auto';
import { getGames } from "../../util/game_api_util";


class OddsPercentageDoughnut extends React.Component {
    constructor(props){
        super(props)
        
    }

    componentWillReceiveProps() {
        const bets = this.props.bets
        const home = 0
        const away = 0
        const home_dollars = 0
        const away_dollars = 0
        bets.forEach(bet => {
            if (bet.selection === this.props.game.home_team) {
                home += 1
                home_dollars += bet.amount
            
            } else {
                away += 1
                away_dollars = bet.amount
            }
        })
        const data = {
            labels: ["Home Team Win %", 
            "Away Team Win %"
            ],
            datasets: [{
              id: 1,
              label: 'Currency Wagered',
              data: [home_dollars, away_dollars],
              backgroundColor: ['rgb(0, 0, 0)',
              '#53d337'
            ],
            hoverOffset: 4
        }]
    };
        const datatwo = {
            labels: ["home", "away"],
            datasets: [{
                id: 2,
                label: 'Bets per Team',
                data: [home, away],
                backgroundColor: [
                    'rgb(0, 0, 0)',
                    '#53d337',
                ],
                borderColor: [
                'rgb(0, 0, 0)',
                '#53d337',
                ],
                borderWidth: 1
            }]
        }
        const config = {
            type: 'doughnut',
            data: data,
        };
        const config2 = {
            type: 'bar',
            data: datatwo,
            options: {
            scales: {
                y: {
                beginAtZero: true
                }
            }
            },
        };
        
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );

        const myBarChart = new Chart(
            document.getElementById('myBarChart'),
            config2,
        )
        
    }





    render() {
        return (
            <div className="chart-container">
                <div className="chart-box">
                    <canvas id="myChart" style={{"width": "150px", "height" : "150px"}}></canvas>
                </div>
                <div className="chart-box">
                    <canvas id="myBarChart" style={{"width": "150px", "height" : "150px"}}></canvas>
                </div>      
            </div>
        )

    }
}

export default OddsPercentageDoughnut;