const cron = require('node-cron');
const getGameResults = require('./games')
const getGameOdds = require('./odds')

// console.log(cron.validate('*/2 * * * *'));
// console.log(cron.validate('*/4 * * * *'));

const tasks = () => {
    cron.schedule('0 */2 * * * *', () => {
      console.log('running every 2 minutes');
      getGameResults();
    });

    cron.schedule('0 0 */4 * * *', () => {
        console.log('running every 4 hours');
        getGameOdds();
    })
}

module.exports = tasks