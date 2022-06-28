import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { FavoriteIcon, Note } from "@material-ui/icons";
import { DeleteOutlined } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
//this is the prop from Posts.js.ln.29
//It cannot be called card or text because it's react component and can't be imported twice import it twice

export default function Album({ post, handleDelete}) { 
  // console.log(handleDelete, post)          //imported in posts
  return (
    <div className='card-container'>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton onClick={() =>{
               console.log('click')
               handleDelete(post._id)
               }}>
              <DeleteOutlined />
            </IconButton>
          }
          title={post.title}
          subheader={post.category}

        />
        <CardContent>
          <Typography color="textSecondary">
            {post.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

