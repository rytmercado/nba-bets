import React from "react";
import Chart from 'chart.js/auto';
import { getGames } from "../../util/game_api_util";


class OddsPercentageDoughnut extends React.Component {
    constructor(props){
        super(props)
        
    }

    componentDidMount() {
        const data = {
            labels: ["Home Team Win %", 
            "Away Team Win %"
            ],
            datasets: [{
              id: 1,
              label: 'Odds of Winning',
              data: [1, 4],
              backgroundColor: ['rgb(0, 0, 0)',
              '#CBB26A'
            ],
            hoverOffset: 4
        }]
    };
        const datatwo = {
            labels: ["home", "away"],
            datasets: [{
                id: 2,
                label: 'Bets per Team',
                data: [1, 2],
                backgroundColor: [
                    'rgb(0, 0, 0)',
                    '#CBB26A',
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
                    <canvas id="myChart"></canvas>
                </div>
                <div className="chart-box">
                    <canvas id="myBarChart" style={{"height" : "303px"}}></canvas>
                </div>      
            </div>
        )

    }
}

export default OddsPercentageDoughnut;