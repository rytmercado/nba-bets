const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const BetSchema = new Schema({
  game: {
    type: ObjectId, 
    required: true 
  },
  selection: {
    type: String,
    required: true 
  },
  user: {
    type: ObjectId, 
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
  }
  //Payout? 
})
//TODO: Payout
//Validations: is selection one of the two teams? Did the user bet a possible amount?  
//TODO: backend validations 
//frontend, model, database contraints 

const Bet = mongoose.model("bets", BetSchema)

module.exports = Bet;