const cron = require('node-cron');
const getGameResults = require('./games');
const getGameOdds = require('./odds');



const tasks = () => {
    cron.schedule('*/2 * * * *', () => {
      console.log('running every 2 minutes');
      getGameResults();
    });

    cron.schedule('0 0 */4 * * *', () => {
        console.log('running every 4 hours');
        getGameOdds();
    });
}

module.exports = tasks;