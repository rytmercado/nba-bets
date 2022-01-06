const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const keys = require('../../config/keys_development')
const jwt = require('jsonwebtoken')
const validateRegisterInput = require('../../config/validation/register')
const validateLoginInput = require('../../config/validation/login')
const mongoose = require('mongoose')
const quickSort = require('../../util/sort')

//index ordered by currency, add currency, show, login, sign up

router.get('/leaderboard/:userCount', (req, res) => {
  User.find().then(users => {
    let orderedUsers = quickSort(users, 0, users.length - 1)
    if (users.length - req.params.userCount < 0){
      return res.status(400).json({"msg": `More users were requested than exist, request ${(users.length - req.params.userCount) * -1} less users`})
    } else{
      //potential TODO lighten payload
      return res.json(orderedUsers.slice(orderedUsers.length -  req.params.userCount ).reverse())
    }
  })
})

// router.post('/add', (req, res) => {
//   User.findById(req.body.userId, (err, user) => {
//     if (user === null){
//       return res.status(404).json({"msg": "user not found"})
//     }
//     console.log(user)
//     user.currency += parseInt(req.body.amount)

//     user.save()
//     return res.json(user.currency)
//   })
// })

router.get('/show/:userId', (req, res) => {
  console.log("Backend")
  console.log(req.params)
  console.log(req.params.userId)
  if (req.params.userId === 'undefined'){
    return res.status(422).json({"msg": "userId is undefined"})
  }
  User.findById(req.params.userId)
  .then( user => {
    if (!!user){
      return res.json(user)
    } else {
      return res.status(404).json({"msg": "User not found"})
    }
  })
}) 


// router.get('/handshake', (req, res) => {
//   User.findById(req.body.userId).then(user => {
//     if (user) {
//       if (parseInt(req.body.amount) !== user.currency){
//         return res.status(401).json({"msg": "User currency data is inconsistent"})
//       }
//       return res.json(user.currency)
//     } else {
//       return res.status(404).json({"msg": "User not found"})
//     }
//   })
// })


router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body)

  if(!isValid){
    return res.status(400).json(errors)
  }
  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res.status(400).json({email: "A user has already registered with this address"})
      } else {
        // Otherwise create a new user
        const newUser = new User({
          handle: req.body.handle,
          email: req.body.email,
          password: req.body.password,
          currency: 1000,
          history: [1000]
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
})

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body)

  if(!isValid){
    return res.status(400).json(errors)
  }
  
  User.findOne({email: req.body.email}).then(
    user => {
      if(!user){
        return res.status(404).json({email: "This user does not exist"})
      }

      bcrypt.compare(req.body.password, user.password).then(isMatch => {
        if (!!isMatch){
          const payload = {
            //is this mongo's object id?
            id: user.id,
            handle: user.handle,
            email: user.email,
            currency: user.currency,
          }

          jwt.sign(
            payload,
            keys.secretOrKey,
            { 
              expiresIn: 3600
            },
            (err, token) => {
              res.json({
                sucess: true, 
                token: "Bearer" + token 
              })
            }
          )
        } else {
          return res.status(400).json({password: "incorrect password"})
        }
      })
    }
  )
})

module.exports = router; 