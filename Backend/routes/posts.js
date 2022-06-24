const express = require('express');
const { validate } = require('../models/PostSchema');
const postRouter = express.Router();
const Post = require('../models/PostSchema');
const User = require('../models/UsersSchema');
const postData = require('./postData');


//Get all posts. index route NOT WORKING
postRouter.get('/posts', validate, (req, res) => {
    Post.find({ username: req.username }, (error, allPosts) => {
        if (error) {
            console.log(error);
            res.status(404).json({
                error: error
            });
        } else {
            console.log(req.username)
            console.log(allPosts)
            res.status(200).json({
                posts: allPosts
            });
        }
    });
});


//Create new post-working
postRouter.post('/add', validate, (req, res) => {
    Post.create({ ...req.body }, (err, PostData) => {
        if (err) {
            console.error(err)
            res.status(400).json({ message: err.message })
        } else {
            res.status(201).json({ Post: PostData })
        }
    })
})

//Get single post by ID - working - localhost:5000/posts/id
postRouter.get('/:id', validate, (req, res) => {
    console.log(req.username)
    Post.findById({ _id: req.params.id }, (err, postData) => {
        if (err) {
            res.status(404).json({ err: "No post found!" })
        } else {
            res.status(200).json(postData)
        }
    })
})




//Update post-working  localhost:5000/posts/update/id
postRouter.put('/update/:_id', validate, (req, res) => {

    Post.updateOne(req.body, (err, updatedPost) => {
        if (err) {
            res.status(404).json({ message: 'Post not found!' })
        } else {
            res.status(202).json(updatedPost)
        }
    })
})

//Delete One by ID post-Working!
postRouter.delete('/:id', validate, (req, res) => {
    Post.deleteOne({ _id: req.params.id }, (error, deletedPost) => {
        if (error) {
            res.status(404).json({ error: 'No post found' })
        } else {
            res.status(204).json({ message: "Successfully deleted!" })
        }
    })
})

//Like a post - 1st must login with username and password to get the JWT token.
// 2nd use the patch request and the token inside Headers in postman to like a post
postRouter.patch('/:id/likePost', validate, async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    const updatedPost = await Post.findByIdAndUpdate(id, { likes: post.likes + 1 }, { new: true });
    res.json(updatedPost);
})




module.exports = postRouter;
