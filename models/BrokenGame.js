const mongoose = require("mongoose")
const Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

const CommentSchema = new Schema({
  body: {
    type: String,
    required: false
  }, 
  user: {
    type: ObjectId, 
    required: true 
  },
  handle: {
    type: String,
    required: true 
  }, 
  parent: {
    type: ObjectId, 
  }
}, 
{
  timestamps: true 
})

const BrokenGameSchema = new Schema({
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
  },
  status: {
    type: String,
    required: true
  },
  game_time: {
    type: String,
    required: true
  },
  game_minute: {
    type: String
  },
  quarter: {
    type: String,
    required: true
  },
  home_score: {
    type: Number,
    required: true
  },
  away_score: {
    type: Number, 
    required: true 
  },
  bug_log: {
    type: String,
    required: true 
  },
  comments: [CommentSchema]
  },
  {
    timestamps: true 
}) 

const BrokenGame = mongoose.model("BrokenGames", BrokenGameSchema)

module.exports = BrokenGame; 