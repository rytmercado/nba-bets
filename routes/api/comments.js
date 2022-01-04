const express = require("express");
const router = express.Router();
const User = require('../../models/User')
const Game = require('../../models/Game')
const mongoose = require("mongoose");

router.get('/:gameId/index', (req, res) => {
  let gameId = req.params.gameId
  Game.findById(gameId, (err, game) => {
   return res.json(game.comments) 
  })
})

//req.body.userId
//req.body.gameId
//req.body.body
//req.body.parentComment
router.post('/create', (req, res) => {
  let gameId = req.body.gameId
  console.log(req.body.gameId)
  Game.findById(gameId, (err, game) => {
    if (!!game){
      game.comments.push({body: req.body.body, user: req.body.userId, parent: req.body.parentComment})
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
    if (!!game){
      game.comments.updateOne({$and: [{"_id": req.body.commentId}, {"user": req.body.userId}]}, {$set: {"comments.$.body": req.body.body}})
      // (err, comment) => {
      //   if (!!comment){
      //     comment.body = req.body.body
      //   } else {
      //     return res.status(404).json({"msg": "Comment not found"})
      //   }
      // })
    } else {
      return res.status(404).json({"msg": "Game not found"})
    }
  })
})

router.delete('/:gameId/delete/:commentId', (req, res) => {

})

// router.update('/:gameId/update/:commentId', (req, res) => {

// })

module.exports = router; 