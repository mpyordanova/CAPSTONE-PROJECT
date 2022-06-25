import axios from 'axios';
                                         //all actions towards backend will e done with redux. We dispatch those actions.

const url=  'http://localhost:5000/posts'; //this is the URL pointing to our backend route
                                           //  /posts returns all the posts we have in the database

export const fetchPosts = () => axios.get(url);  