const Validator = require('validator')
const validText = require('./valid-text')

module.exports = function validateRegisterInput(data){
  let errors = {}

  data.handle = validText(data.handle) ? data.handle : ''
  data.email = validText(data.email) ? data.email : ''
  data.password = validText(data.password) ? data.password : ''
  data.password2 = validText(data.password2) ? data.password2 : ''

  if (!Validator.isLength(data.handle, {min: 2, max: 30})){
    errors.handle = "Length must be between 2 and 30 alphanumeric charactars"
  }
  if (Validator.isEmpty(data.handle)){
    errors.handle = "Username cannot be empty"
  }
  if (Validator.isEmpty(data.email)){
    errors.email = "Email cannot be empty"
  }
  if (!Validator.isEmail(data.email)){
    errors.email = "Email must be formatted correctly"
  }
  if (Validator.isEmpty(data.password)){
    errors.password = "Password cannot be empty"
  }
  if (!Validator.isLength(data.password, {min: 6, max: 30})){
    errors.password = "Password must between 6 and 30 chars"
  }

  if (!Validator.equals(data.password, data.password2)){
    errors.password2 = "Passwords must match"
  }

  return {
    errors, 
    isValid: Object.keys(errors).length === 0,

  }
}

