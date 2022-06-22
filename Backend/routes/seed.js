const express= require('express');
const seedRouter = express.Router();
const Post = require('../models/PostSchema');
const User = require('../models/UsersSchema');
const postData = require('./postData');
const userData = require('./userData');

seedRouter.post('/post', (req, res)=>{
    console.log(postData)
    Post.insertMany(postData, (err, PostData)=>{
        if(err){
            console.error(err)
            res.status(400).json({message:err.message})
        }else{
            res.status(201).json({Post:PostData})
        }
    })
})

seedRouter.post('/user', (req,res)=>{
    console.log(userData)
    User.insertMany(userData, (err, UserData)=>{
        if(err){
            res.status(400).json({message:err.message})
        }else{
            res.status(201).json({User:UserData})
        }
    })
})
module.exports = seedRouter;