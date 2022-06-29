import React from "react";
import { useState, useEffect } from "react";
import { Button, Paper, Container, IconButton, Input } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles'
// // import { useDispatch, useSelector } from 'react-redux';  //after we create the dispatch action from action/posts we export it and import it here
import FileBase from "react-file-base64"; //to attach files
import { KeyboardArrowRight, PhotoCamera } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
// import { createPost, updatePost } from '../../actions/posts';

const useStyles = makeStyles({
  field: {
    marginTop: 50,
    marginBottom: 50,
    display: "block",
  },
});

export default function Form() {
  const classes = useStyles();
  const [album, setAlbum]= useState({
    title:"",
    category:"",
    description:"",
    likes:"",
    image:""

  })
  const navigate= useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:5000/posts/add', album,{
    headers: {
        "JWT-Token": localStorage.jwtToken,
      },
    });
    console.log(response);
   navigate('/Posts') 
  }
  const handleChange = (event) => {
    setAlbum({ ...album, [event.target.name]: event.target.value });
  }


  return (
    <Container >
      <Typography color="textSecondary" component="h2" gutterBottom>
        Create new Album
      </Typography>
      <form noValidate autoComplete="off"></form>
      <TextField onChange={handleChange} name='title'
        className={classes.field}
        label="Album title"
        variant="outlined"
        color="secondary"
        required
      />
       <TextField  onChange={handleChange} name='description'
        className={classes.field}
        label="description"
        variant="outlined"
        color="secondary"
        required
      />
      <TextField onChange={handleChange} name='username'
        className={classes.field}
        label="username"
        variant="outlined"
        color="secondary"
        required
      />
       <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      <Button
        onClick={handleSubmit}
        type="submit"
        variant="contained"
        // endIcon={KeyboardArrowRight}
      >
        Submit
      </Button>
    </Container>
  );
}

// const Form = ({ currentId, setCurrentId }) => {
//     const [postData, setPostData] = useState({ username: '', title: '', description: '', selectedFile: '' });
//     // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
// //     // const dispatch = useDispatch();
//     const classes = makeStyles();
//   useEffect(()=>{
//     const fetchData = async () => {
//       const response = await axios.get('http://localhost:5000/posts/posts', {
//         headers: {
//           "JWT-Token": localStorage.jwtToken
//         }
//       });
//       console.log(response);
//       setPostData(response.data.postData);
//     }
//     fetchData();
//   }, [])

// return (
//     <Paper className={classes.paper}>
//       <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>       {/*} onSubmit={handleSubmit}>*/}
//         <Typography variant="h6">{currentId ? `Editing "${postData.title}"` : 'Creating a new Album'}</Typography>
//         <TextField username="username" variant="outlined" label="username"    fullWidth value={postData.username}                 onChange={(e) => setPostData({ ...postData, username: e.target.value })} />
//         <TextField name="title"        variant="outlined" label="Title"       fullWidth value={postData.title}                     onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
//         <TextField name="description"  variant="outlined" label="description" fullWidth multiline rows={4} value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
//         {/* <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} /> */}
//         <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
//         <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
//         {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> */}
//       </form>
//     </Paper>
//   );
// };

// export default Form;
