const express = require("express")
const app = express(); 
const mongoose = require("mongoose")
const db = require('./config/keys').mongoURI
const users = require("./routes/api/users")
const games = require("./routes/api/games")
const User = require("./models/User")
const bodyParser = require("body-parser")
const passport = require("passport");
const getGameOdds = require('./util/odds')
const getGameResults = require('./util/games')
const Game = require('./models/Game')
const tasks = require('./util/cron')

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to mongoDB'))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
  extended: false
}) )

app.use(bodyParser.json()); 

app.use("/api/users", users);
app.use("/api/games", games)

// console.log(Game.find({home_team: "Golden State Warriors"}, () => {

// }))

app.get("/", (req, res) => res.send("Hello World!!"));

app.use(passport.initialize());
require('./config/passport')(passport);


const port = process.env.PORT || 5000; 

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

// getGameResults()

// tasks();
