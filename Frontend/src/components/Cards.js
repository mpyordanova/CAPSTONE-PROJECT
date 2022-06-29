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

{/* <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a new Album'}</Typography>
          <TextField username="username" variant="outlined" label="username"    fullWidth value={postData.username}                 onChange={(e) => setPostData({ ...postData, username: e.target.value })} />
          <TextField name="title"        variant="outlined" label="Title"       fullWidth value={postData.title}                     onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          <TextField name="description"  variant="outlined" label="description" fullWidth multiline rows={4} value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
         
          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
    );
  }; */}
  