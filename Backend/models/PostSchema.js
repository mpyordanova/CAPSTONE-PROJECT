const {Schema} = require ("mongoose");
const mongoose = require ('mongoose');

const postSchema = mongoose.Schema ({
title: String,
category: String,
description: String,
username: String,
selectedFile:Number,
likes:{
    type: Number,
    default: 0,
},
},
{
    timestamps:true
});

const Post= mongoose.model('Post', postSchema);

module.exports = Post;