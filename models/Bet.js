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
  date: {
    type: String,
    required: true 
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
},
{
  timestamps: true
})
const Bet = mongoose.model("Bet", BetSchema)

module.exports = Bet;