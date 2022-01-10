// import React from 'react';
// import Chart from 'chart.js/auto';

// class BarGraphBets extends React.Component {
//     constructor(props){
//         super(props)
        
//     }

//     componentDidMount() {
//         this.props.fetchGameBets(this.props.g._id)
//     }

//     render() { 
//     const bets = this.props.bets.filter(bet => bet.selection === this.props.g.home_team )
//     const d1 = bets.length
//     const d2 = this.props.bets.length - d1;
//     const data2 = {
//         labels: ["home", "away"],
//         datasets: [{
//             label: 'Bet Totals',
//             data: [1, 2],
//             backgroundColor: [
//                 'rgb(0, 0, 0)',
//                 '#CBB26A',
//             ],
//             borderColor: [
//             'rgb(0, 0, 0)',
//             '#CBB26A',
//             ],
//             borderWidth: 1
//         }]
//     }
//     const config = {
//         type: 'bar',
//         data: data,
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         },
//       };
//       const myBarChart = new Chart(
//         document.getElementById('myBarChart'),
//         config
//       )
//         return (
//             <div>
//                 <canvas id="myBarChart"></canvas>
//             </div>      
//         )

//     }
// }

// export default BarGraphBets;