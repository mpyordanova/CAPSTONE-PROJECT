const express = require('express');
const userRouter = express.Router();
const Post = require('../models/PostSchema');
const User = require('../models/UsersSchema');
const userData = require('./userData');
const bcrypt = require('bcrypt');
const saltRounds = process.env.SALT_ROUNDS;
const jwtSecret = process.env.JWT_SECRET;
const jwt = require('jwt-simple');
const { validate, login } = require('../middlewares');
const { Router } = require('express');



//Create user/ register user- Works!!
userRouter.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(Number(saltRounds));
    let hashedPass = await bcrypt.hash(req.body.password, salt);

    User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,      
    }, (error, createdUser) => {
        if (error) {
            console.error(error);
            res.status(400).json({
                error: error
            });
        } else {
            console.log('User created!');
            // console.log(jwtSecret, saltRounds)
            let encoded = jwt.encode({
                password: createdUser.password,
                username: createdUser.username
            }, jwtSecret);
            res.status(201).json({
                jwtToken: encoded
            });
        }
    });
})


//Login route -
userRouter.post('/login', login, (req,res)=>{
    if(req.result){
        let encoded = jwt.encode({
            password:req.password,
            username: req.username
        }, jwtSecret);
        res.status(200).json({
            jwtToken:encoded
        });
    }else{
        res.status(403).json({});
    }
});

//Update user- NOT WORKING YET!!!!!!!!!!
userRouter.put('/update/:_id', (req, res)=> {
    const _id = req.params._id;
    User.updateOne({_id:req.params._id}, req.body, (err, updatedUser) =>{
         if (err){
             res.status(404).json({message: 'User not found!'})
         }else {
             res.status(202).json(updatedUser)
         }
    
    })
})


//Delete user
userRouter.delete('/:id', (req, res)=>{
    User.deleteOne({_id:req.params.id},(error, deleteUser)=>{
        if(error){
            res.status(404).json({error: "No user found!"})
        }else{
            res.status(204).json({message:"Successfully deleted!"})
        }
    })
})

module.exports = userRouter;