// import React from "react";
// import { useState, useEffect } from "react";
// import { TextField, Button, Typography, Paper} from '@material-ui/core';
// import useStyles from './styles';
// // import { useDispatch, useSelector } from 'react-redux';  //after we create the dispatch action from action/posts we export it and import it here
// import FileBase from 'react-file-base64';   //to attach files
// // import { createPost, updatePost } from '../../actions/posts';



// const Form = ({ currentId, setCurrentId }) => {
//     const [postData, setPostData] = useState({ username: '', title: '', description: '', selectedFile: '' });
//     // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
//     // const dispatch = useDispatch();
//     // const classes = useStyles();
//   useEffect(()=>{
//     const fetchData = async () => {
//       const response = await axios.get('http://localhost:5000/posts', {
//         headers: {
//           "JWT-Token": localStorage.jwtToken
//         }
//       });
//       console.log(response);
//       setPostData(response.data.postData);
//     }
//     fetchData();
//   }, [])
    
// } 
    



// return (
//     <Paper className={classes.paper}>
//       <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
//         <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a new Album'}</Typography>
//         <TextField username="username" variant="outlined" label="username"    fullWidth value={postData.username}                 onChange={(e) => setPostData({ ...postData, username: e.target.value })} />
//         <TextField name="title"        variant="outlined" label="Title"       fullWidth value={postData.title}                     onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
//         <TextField name="description"  variant="outlined" label="description" fullWidth multiline rows={4} value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
//         {/* <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} /> */}
//         <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
//         <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
//         <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
//       </form>
//     </Paper>
//   );
// };


// export default Form;