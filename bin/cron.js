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
      getGameResults();
    });

    cron.schedule('0 0 */4 * * *', () => {
        getGameOdds();
    });
}

module.exports = tasks;