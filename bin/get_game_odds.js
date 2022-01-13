const getGameOdds = require('../util/odds');
const mongoose = require("mongoose")
const db = require('../config/keys').mongoURI

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(getGameOdds())
    .catch(err => console.log(err));

