const mongoose = require("mongoose")
const Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

const BetSchema = new Schema({
  game: {
    type: ObjectId, 
    required: true 
  },
  user: {
    type: ObjectId, 
    required: true 
  },
  selection: {
    type: String,
    required: true 
  },
  amount: {
    type: Number,
    required: true, 
    //1st arg is a function that returns a truthy/falsly value, second is an error message 
    // validate: [validateAmount, "error to be rendered"]
  },
  //Incomplete, won, and lost 
  status: {
    type: String,
    required: true 
  },
  payout: {
    type: Number,
    required: true 
  }
  //Payout
})
//TODO: Payout
//Validations: is selection one of the two teams? Did the user bet a possible amount?  
//TODO: backend validations 

//

//define validations here

const Bet = mongoose.model("bets", BetSchema)

module.exports = Bet;