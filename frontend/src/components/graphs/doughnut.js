import React from "react";
import Chart from 'chart.js/auto';


class Doughnut extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log(this.props.g)
        const home = this.props.g.home_team
        const away = this.props.g.away_team

        const data = {
            labels: ["Home", 
            "Away"
            ],
            datasets: [{
              label: 'Total Currency Bet',
              data: [{home}, {away}],
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