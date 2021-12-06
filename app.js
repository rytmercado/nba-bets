const express = require("express")
const app = express(); 
const mongoose = require("mongoose")
const db = require('./config/keys').monogURI
const users = require("./routes/api/users")
const tweets = require("./routes/api/tweets")
const User = require("./models/User")
const bodyParser = require("body-parser")
const passport= require("./config/passport");

mongoose.connect(db, {  useNewUrlParser: true }).then(
  () => console.log("connected to mongoDB")
)

app.use(bodyParser.urlencoded({
  extended: false
}) )

app.use(bodyParser.json()); 

app.use(passport);


app.get("/", (req, res) => {
  const user = new User({
    handle: "owen",
    email: "owen@owen.net",
    password: "qwerty123"
  })
  user.save()
});

app.use("/api/users", users)
app.use("/api/tweets", tweets)

const port = process.env.PORT || 5000; 

app.listen(5000, () => {
  console.log(`listening on port ${port}`)
})