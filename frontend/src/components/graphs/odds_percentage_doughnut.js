import React from "react";
import Chart from 'chart.js/auto';
import { getGames } from "../../util/game_api_util";


class OddsPercentageDoughnut extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            data: props.data,
        }
        
    }

    componentDidMount() {
        console.log(this.state.data)
        const data = {
            labels: ["Home Team Win %", 
            "Away Team Win %"
            ],
            datasets: [{
              id: 1,
              label: 'Win Percentage',
              data: [.4, .6],
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
       
    render() {
        return (
                <div className="chart-box">
                    <canvas id="myChart" style={{"width": "150px", "height" : "150px"}}></canvas>
                </div>
        )

    }
}

export default OddsPercentageDoughnut;