const cron = require('node-cron');
const getGameResults = require('../util/games');
const getGameOdds = require('../util/odds');
const mongoose = require("mongoose")
const db = require('../config/keys').mongoURI

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to mongoDB'))
    .catch(err => console.log(err));


const tasks = () => {
    getGameOdds();

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