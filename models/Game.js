const { isInteger } = require("lodash");
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  start_time: {
    type: Date,
    required: true 
  },
  home_team: {
    type: String,
    required: true 
  },
  away_team: {
    type: String,
    required: true
  },
  home_odds: {
    type: Number, 
    required: true 
  },
  away_odds: {
    type: Number,
    required: true
  }
 },
  {
    timestamps: true 
}) 

const Game = mongoose.model("games", GameSchema)

module.exports = Game; 