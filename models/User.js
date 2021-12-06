const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  handle: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  //Datetime is not hooked into mongoose, makes data manipulation and database application diffcult 
  //https://github.com/Automattic/mongoose/issues/1598
  
  birthdate: {
    type: Date,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const User = mongoose.model('users', UserSchema);

module.exports = User;
