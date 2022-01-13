import React from "react";
import Chart from 'chart.js/auto';
import { getGames } from "../../util/game_api_util";


class CurrencyBar extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
        
    }

    componentDidMount() {
        this.props.fetchGameBets(this.props.g._id).then(res => {
            console.log(res)
        })
            
        const datatwo = {
            labels: ["home", "away"],
            datasets: [{
                id: 2,
                label: 'Bets per Team',
                data: [1, 10],
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

        

        const configtwo = {
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
        const myBarChart = new Chart(
            document.getElementById('myBarChart'),
            configtwo,
        )
    }
       
    





    render() {
        const bets = this.props.data
        console.log(bets)
            // let home = 0
            // let away = 0
            // for (let i = 0; i < bets.length; i++) {
            //     if (bets[i].selection === this.props.game.home_team) {
            //         home += 1
                    
            //     } else {
            //         away += 1
            //     }
            // }
           
            
        return (
                <div className="chart-box">
                    <canvas id="myBarChart" style={{"width": "150px", "height" : "150px"}}></canvas>
                </div>     
        )

    }
}

export default CurrencyBar;