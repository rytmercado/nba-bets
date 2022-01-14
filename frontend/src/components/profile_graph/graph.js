import React from 'react';
// import { Chart } from 'chart.js'
import Chart from 'chart.js/auto';

class Graph extends React.Component{
  //this.props.user.history 

  constructor(props){
    super(props)

  }

  componentDidMount(){
    if (this.props.currentUser._id){
      if (this.props.currentUser.history){
        let user = this.props.currentUser;
        let userData = this.props.currentUser.history; 

        const ctx = document.getElementById('myChart');

        const labels = []; 
        const yData = []; 

        for (let i = 0; i < userData.length; i++){
          const currentBet = userData[i]
          labels.push(currentBet.x.slice(0,10))
          yData.push(currentBet.y)
        }
       

        const data = {
          labels: labels,
          datasets: [{
            label: `${user.handle}'s Account Balance`,
            data: yData,
            fill: false,
            borderColor: 'rgb(33, 188, 56)',
            tension: 0.1
          }]
        };
        
        const myChart = new Chart(ctx, {
          type: 'line',
          data: data, 
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        });
      } else {
        this.props.fetchUser(this.props.currentUser._id).then(res => {

          let user = res.user;
          let userData = user.history; 

          const ctx = document.getElementById('myChart');

          const labels = []; 
          const yData = []; 

          for (let i = 0; i < userData.length; i++){
            const currentBet = userData[i]
            labels.push(currentBet.x.slice(0,10))
            yData.push(currentBet.y)
          }
        

          const data = {
            labels: labels,
            datasets: [{
              label: `${user.handle}'s Account Balance`,
              data: yData,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          };
          
          const myChart = new Chart(ctx, {
            type: 'line',
            data: data, 
            options: {
              responsive: true,
              maintainAspectRatio: false
            }
          });
        })
      }
    }
  }

  render(){
    return (
      <div className="ChartContainer"> 
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    )
  }
}

export default Graph; 