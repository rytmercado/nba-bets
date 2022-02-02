const express = require("express");
const router = express.Router();
const User = require('../../models/User')
const Game = require('../../models/Game')
const Comment = require('../../models/Comment')
const mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectID;

//Probably not necessary, as comments are already embedded in games. 
router.get('/:gameId/index', (req, res) => {
  let gameId = req.params.gameId
  Game.findById(gameId, (err, game) => {
   return res.json(game.comments) 
  })
})

//req.body.userId
//req.body.handle 
//req.body.gameId
//req.body.body
//req.body.parentComment
router.post('/create', (req, res) => {
  let gameId = req.body.gameId

  Game.findById(gameId, (err, game) => {
    if (!!game){

      if (req.body.body.length < 1){
        return res.status(422).json({"msg": "Body cannot be empty"})
      } else if (req.body.handle.length < 1){
        return res.status(422).json({"msg": "Handle cannot be empty"})
      } 
      
      game.comments.push({body: req.body.body, user: req.body.userId, 
        handle: req.body.handle, 
        parent: req.body.parentComment})
      
      game.save()

      return res.json(game)
    } else {
      return res.status(404).json({"msg": "Game not found"})
    }
  } )
})

//req.body.userId
//req.body.gameId
//req.body.body
//req.body.commentId
router.patch('/update', (req, res) => {
  let gameId = req.body.gameId

  Game.findById(gameId, (err, game) => {
    if (err){
      return res.status(422).json(err)
    } else {
      if (!!game){
        // return res.json(game.comments[0]._id)
       for (let i = 0; i < game.comments.length; i++){
         if (game.comments[i]._id.toString() === req.body.commentId){
          if(game.comments[i].user.toString() === req.body.userId){
            game.comments[i].body = req.body.body; 
            game.save()
            return res.json(game)
          } else {
            return res.status(422).json({"msg": "user may only edit their own comments"})
          }
         }
       }
       return res.status(404).json({"msg": "Comment not found"})
      } else {
        return res.status(404).json({"msg": "Game not found"})
      }
    }
  })
})

//req.body.userId
router.delete('/:gameId/delete/:commentId/:userId', (req, res) => {
  // debugger 
  Game.findById(req.params.gameId, (err, game) => {
    if (err){
      return res.status(422).json(err)
    } else {
      if (!!game){
        for (let i = 0; i < game.comments.length; i++) {
          if (game.comments[i]._id.toString() === req.params.commentId) {
           if (game.comments[i].user.toString() === req.params.userId) {
              game.comments.splice(i, 1)
              game.save()
              return res.json(game)
           } else {
              return res.status(422).json({"msg": "user may only delete their own comments"})
            }
          } 
        } 
        return res.status(404).json({"msg": "Comment was not found."})
      }
    }
  })
})


module.exports = router; 