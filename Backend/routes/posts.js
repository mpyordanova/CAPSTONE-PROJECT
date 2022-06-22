const express = require('express');
const postRouter = express.Router();
const Post = require('../models/PostSchema');
const User = require('../models/UsersSchema');
const postData = require('./postData')

// index route NOT WORKING
postRouter.get('/', (req, res)=>{
    console.log(post)
    res.status(200).json(post)
})

// new post  ?????
postRouter.post('/new/',(req, res)=>{
    console.log(postData)
    const postData= req.body
    Post.create(postData,(err, post)=>{
        if(err){
            res.status(400).json({message:err.message})
        }else{
            res.status(201).json({post})
        }
    })
})

//update post
postRouter.put('/update/:_id', (req, res)=>{
    const _id = req.rapams._id;
    Post.updateOne({_id:req.params._id}, req.body, (err,updatedPost)=>{
        if(err){
            res.status(404).json({message: 'Post not found!'})
    }else{
        res.status(202).json(updatedPost)
    }
    })
})

module.exports = postRouter;