import React, {useEffect} from 'react'
// import Header from './components/Header';
// import Main from './components/Main';
import './App.css';
// import { Route, Routes, useNavigate} from 'react-router-dom';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';   //allws us to dispatch an action
import pictures from './Images/Canyon.jpg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import {getPosts} from './actions/posts';  //we acreate action to use in useEffect dispatch()


const App =()=> {
  const classes = useStyles();
  const dispatch = useDispatch();  

  useEffect(()=>{        //helps us find a way where to dispatch the action
    dispatch(getPosts());
  }, [dispatch]);        //use dispatch in the dependancy array

   
  return (
    <div className="App"> 
    <Container maxwidth='lg'>
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant="h2" align="center">Albums</Typography>
          <img className={classes.image} src={pictures} alt="pictures" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems='stretch' spacing={3}>
              {/* {12}it means it will take the full grind on small devices sm{7} means it will take 7 out of all spaces on md or small devices*/}
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
       {/* <Header search={search} handleChange={handleChange} handleSubmit={handleSubmit} /> */}
     {/* <Main/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Favorites' element={<Favorites/>}/>
       <Route path='/Beach' element={<Beach/>}/>
       <Route path='/Mountain' element={<Mountain/>}/>
       <Route path='/City' element={<City/>}/>
       <Route path='/Culture' element={<Culture/>}/>
     </Routes>   */}
    </div>
  );
}

export default App;






