import React from "react";
import SinglePost from "./SinglePost/SinglePost";
import useStyles from './styles';
import { useSelector } from "react-redux";   //to fetch the data from the global redux store

const Posts = () => {
    const posts= useSelector ((state)=>state.posts) //.post comes from the reducers/posts.js combineReducers({posts})
    const classes = useStyles();
console.log(posts);
    return(
        <>
        <h1>Memories</h1>
        <SinglePost/>
        <SinglePost/>
        </>
    );
}

export default Posts;