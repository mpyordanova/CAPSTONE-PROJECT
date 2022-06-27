import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/posts", {
        headers: {
          "JWT-Token": localStorage.jwtToken,
        },
      });
      console.log(response);
      setPosts(response.data.posts);
    }
    fetchData();
  }, [])
  return (
    <div>
     {posts?.map((posts, index) => {
        return (
          <div>
            <h3>{posts.title}</h3>
            {
              posts?.post?.map((post, index) => {
                return(
                  <div>
                    title: {post.title}
                    <br/>
                    description: {post.description}
                    <br/>
                  
                  </div>
                )
              })
            }
          </div>
        )
      })}
    </div>
  )
}
export default Posts;
