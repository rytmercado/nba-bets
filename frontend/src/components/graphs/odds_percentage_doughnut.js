import React from "react";
import Chart from 'chart.js/auto';



class OddsPercentageDoughnut extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            data: props.data,
        }
        
    }

    componentDidMount() {
        const game = this.props.game;
        let odds = 0
        let homeAway = 0
        if (game.home_odds < 0) {
            odds = (((game.home_odds * -1) / (game.home_odds * -1 + 100)) * 100).toFixed(2) 
            console.log(odds)
            homeAway += 1
        } else {
            odds = (((game.away_odds * -1) / (game.away_odds * -1 + 100)) * 100).toFixed(2)
            homeAway -= 1
        }
       if (homeAway > 0) {
           const home = homeAway
           const away = 1 - homeAway
           const data = {
               labels: ["Home Team Win %", 
               "Away Team Win %"
               ],
               datasets: [{
                 id: 1,
                 label: 'Win Percentage',
                 data: [home, away],
                 backgroundColor: ['rgb(0, 0, 0)',
                 '#53d337'
               ],
               hoverOffset: 4
           }]
       };
           const config = {
               type: 'doughnut',
               data: data,
           };
           const myChart = new Chart(
               document.getElementById('myChart'),
               config
           );
       } else {
        const away = homeAway
        const home = 1 - homeAway
        const data = {
            labels: ["Home Team Win %", 
            "Away Team Win %"
            ],
            datasets: [{
              id: 1,
              label: 'Win Percentage',
              data: [home, away],
              backgroundColor: ['rgb(0, 0, 0)',
              '#53d337'
            ],
            hoverOffset: 4
        }]
    };
        const config = {
            type: 'doughnut',
            data: data,
        };
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );

       }
    }
       
    render() {
        const game = this.props.game;
        let odds = 0
        let homeAway = 0
        if (game.home_odds < 0) {
            odds = (((game.home_odds * -1) / (game.home_odds * -1 + 100)) * 100).toFixed(2) 
            console.log(odds)
            homeAway += 1
        } else {
            odds = (((game.away_odds * -1) / (game.away_odds * -1 + 100)) * 100).toFixed(2)
            homeAway -= 1
        }
        if (homeAway > 0) {
            return (
                    <div className="chart-box">
                        <canvas id="myChart" style={{"width": "150px", "height" : "150px"}}></canvas>
                        <strong>{game.home_team} are {odds}% to win based on the line</strong>
                    </div>
            )
        } else {
            return (
                <div className="chart-box">
                        <canvas id="myChart" style={{"width": "150px", "height" : "150px"}}></canvas>
                        <strong id="chart-text" >{game.away_team} are {odds}% to win based on the line</strong>
                    </div>
            )
        }

    }
}

export default OddsPercentageDoughnut;