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


//get users
// userRouter.get('/user', (req, res) => {
//     User.find().then((data)=>{
// console.log(data)
// res.status(200).json(data)
//     })
//     res.status(200).json(user)
// })

//Create user/ register user
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


//Login route
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




//Update user





//Delete user


module.exports = userRouter;