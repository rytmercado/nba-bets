const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//all of this is probably unnneccessary and covered Game.js

const CommentSchema = new Schema({
  body: {
    type: String,
    required: false
  }, 
  user: {
    type: ObjectId, 
    required: true 
  }
}, 
{
  timestamps: true 
})
let Comment = new Schema("comments", CommentSchema)
module.exports = Comment;