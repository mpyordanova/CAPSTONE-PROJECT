const express = require ('express');
const userRouter = express.Router();
const Post = require ('../models/PostSchema');
const User = require ('../models/UsersSchema')
const userData = require('./userData')

//get users
userRouter.get('/user', (req,res)=>{
    res.status(200).json(users)
})




module.exports = userRouter;