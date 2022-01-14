getGameResults = require('../util/games');
const mongoose = require("mongoose")
const db = require('../config/keys').mongoURI

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(getGameResults())
    .catch(err => console.log(err));

