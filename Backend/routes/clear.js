const express = require('express');
const clearRouter = express.Router();
const Post = require('../models/PostSchema');
const User = require('../models/UsersSchema')

clearRouter.delete('/posts',(req, res)=>{
    Post.deleteMany(
        (err)=>{
            if(err){
                res.status(404).json({message:err.message})
            }else{
                res.status(204).json({})
            }
        }
    )
})

clearRouter.delete('/users',(req, res)=>{
    User.deleteMany(
        (err)=>{
            if(err){
                res.status(404).json({message:err.message})
            }else{
                res.status(204).json({})
            }
    })
})

module.exports = clearRouter;