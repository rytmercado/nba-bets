const mongoose = require("mongoose")
const Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

//all of this is probably unnneccessary and covered Game.js

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

const Comment = mongoose.model("comments", CommentSchema)
module.exports = Comment;