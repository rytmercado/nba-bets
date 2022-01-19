import React from "react";
import Chart from 'chart.js/auto';



class BetsBar extends React.Component {
    constructor(props){
        super(props)
        
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
                        home.push(1) 
                    } else {
                        away.push(1) 
                    }
                }
            }
            const reducer = (previousValue, currentValue) => previousValue + currentValue;
            const homeData = home.reduce(reducer)
            const awayData = away.reduce(reducer)
            const datatwo = {
            labels: ["home", "away"],
            datasets: [{
                id: 2,
                label: '$ bet per team',
                data: [homeData, awayData],
                    backgroundColor: [
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
                        const myBetsBar = new Chart(
                            document.getElementById('myBetsBar'),
                            configtwo,
                        )
        });
    }

    render() {
        const bets = this.props.bets
        const game = this.props.game
        let home = 0
        let away = 0
        if (bets && game) {
            for (let i = 0; i < bets.length; i++) {
                    if (bets[i].selection === game.home_team) {
                        home += 1
                        
                    } else {
                        away += 1
                    }
                }
                return (
                        <div className="chart-box2">
                            <div className="chart">
                                <canvas id="myBetsBar" style={{"width": "150px", "height" : "150px"}}></canvas>
                            </div>
                            <strong id="chart-text">{home} user(s) bet on {game.home_team}, while {away} user(s) have bet on {game.away_team}</strong>
                        </div>     
                )
    }
}
}

export default BetsBar;