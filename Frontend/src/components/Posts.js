import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Button, CardActions, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import axios from "axios";
import Album from "./Cards";
import { CardMedia } from '@mui/material';
// import Form from "./Form";

const Posts = () => {
  const [posts, setPosts] = useState([]);
const classes = makeStyles();
// useStyles = makeStyles();
  useEffect(() => {
    console.log(localStorage.jwtToken);
    const fetchData = async () => {
      //deletes the post from our json file
      const response = await axios.get("http://localhost:5000/posts/posts", {
        headers: {
          "JWT-Token": localStorage.jwtToken,
        },
      });
      console.log(response);
      setPosts(response.data.posts);
    };
    fetchData();
  }, []);

  // function to delete the post.(connected to the little delete icon)
  const handleDelete = async (id) => {
    await axios.delete("http://localhost:5000/posts/" + id, {
      headers: {
        "JWT-Token": localStorage.jwtToken,
      },
    });
    console.log('deleted!')
    //this will delete the post from useState as well so it will dissapear from the screen(browser)
    const newPosts = posts.filter((post) => post._id !== id);
    setPosts(newPosts);
  };

  return (
    <Container>
      <CardMedia className={classes.media} image={posts.selectedFile}></CardMedia>
      <Grid container spacing={3}>
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} md={6} lg={4}>
            <Album post={post}  handleDelete={handleDelete} />{" "}
            <Button size="small" color="primary"><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>

            {/*Album is imported from Cards.js. Passing props to show what we want on the page, handleDelete passed from ln 26 */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Posts;

/* <Container>
      <Grid container>
        {posts?.map((posts, index) => {
          return (
            <div>
              <Grid item xs={12} md={6} lg={4}>
               <Card posts={posts}/>  {/*Card is imported from Cards.js. Passing props to show what we want on the page */
// };
//               </Grid>
//               {posts?.post?.map((post, index) => {
//                 return (
//                   <div>
//                     title: {posts.title}
//                     <br />
//                     description: {posts.description}
//                     <br />
//                   </div>
//                 );
//               })}
//             </div>
//           );
//         })}
//       </Grid>
//     </Container>
//   );
// }; */}
