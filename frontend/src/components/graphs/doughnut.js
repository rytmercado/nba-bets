import React from "react";
import Chart from 'chart.js/auto';


class Doughnut extends React.Component {
    constructor(props){
        super(props)

        
    }

    componentDidMount() {
        this.props.fetchGameBets(this.props.game.id)
        const odds = ((this.props.game.home_odds / 100) * -1)
        const odds2 = 1 - odds 
        const data = {
                labels: ["Home", 
                "Away"
                ],
                datasets: [{
                  label: 'Percentage Win',
                  data: [{odds2}, {odds}],
                  backgroundColor: ['rgb(255, 99, 132)',
                  'rgb(54, 162, 235)'
                ],
                hoverOffset: 4
            }]
        }
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
            <div>
                <canvas id="myChart"></canvas>
            </div>      
        )

    }
}

export default Doughnut;