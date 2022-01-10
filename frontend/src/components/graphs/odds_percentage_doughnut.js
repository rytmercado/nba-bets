import React from "react";
import Chart from 'chart.js/auto';


class OddsPercentageDoughnut extends React.Component {
    constructor(props){
        super(props)
        
    }

    componentDidMount() {
        this.props.fetchGameBets(this.props.game.id)
        const home = 1 / ((this.props.game.home_odds / 100) * -1)
        const away = 1 - (home)
        const data = {
            labels: ["Home Team Win %", 
            "Away Team Win %"
            ],
            datasets: [{
              id: 1,
              label: 'Odds of Winning',
              data: [.35, .65],
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
                label: 'Home Bets',
                data: [1, 2],
                backgroundColor: [
                    'rgb(0, 0, 0)',
                    '#CBB26A',
                ],
                borderColor: [
                'rgb(0, 0, 0)',
                '#CBB26A',
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
        myBarchart.canvas.parentNode.style.height = '303px';
        return (
            <div className="chart-container">
                <div className="chart-box">
                    <canvas id="myChart"></canvas>
                </div>
                <div className="chart-box">
                    <canvas id="myBarChart"></canvas>
                </div>      
            </div>
        )

    }
}

export default OddsPercentageDoughnut;