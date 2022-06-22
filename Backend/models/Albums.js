const {Schema} = require ("mongoose");
const mongoose = require ('mongoose');

const postSchema = mongoose.Schema ({
title: String,
describtion: String,
creator: String,
selectedFile:String,
},
{
    timestamps:true
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;