import React from "react";
import Chart from 'chart.js/auto';



class BetsBar extends React.Component {
    constructor(props){
        super(props)
        
    }

    componentDidMount() {
            this.props.fetchGameBets(this.props.id);
            const bets = this.props.bets;
            const game = this.props.game;
            if (bets && game) {
                let home = 0
                let away = 0
                for (let i = 0; i < bets.length; i++) {
                        if (bets[i].selection === game.home_team) {
                            home += 1
                            
                        } else {
                            away += 1
                        }
                    }
                const homeData = home;
                const awayData = away;
                    const datatwo = {
                        labels: ["home", "away"],
                        datasets: [{
                            id: 2,
                            label: 'Bets per Team',
                            data: [homeData, awayData],
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
                        document.getElementById('myBetsBar'),
                        configtwo,
                    )
            }
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
                        <div className="chart-box">
                            <canvas id="myBetsBar" style={{"width": "150px", "height" : "150px"}}></canvas>
                            <strong id="chart-text">{home} users bet on {game.home_team}, while {away} users have been bet on {game.away_team}</strong>
                        </div>     
                )
    }
}
}

export default BetsBar;