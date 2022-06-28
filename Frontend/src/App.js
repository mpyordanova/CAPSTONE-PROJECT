import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Login from './components/login';
import Posts from './components/Posts';
import Layout from './components/Layout';




const App =()=> {
   
  return (
    <div className="App"> 
      <Header />
      <Routes>
     
       <Route path='/' element={<Home/>}/>
       <Route path='/Posts' element={<Posts />}/> 
       <Route path='/login' element={<Login/>}/>
       {/* <Route path='/Beach' element={<Beach/>}/>
       <Route path='/Mountain' element={<Mountain/>}/>
       <Route path='/City' element={<City/>}/>
       <Route path='/Culture' element={<Culture/>}/> */}
 
     </Routes>  
    </div>
  );
}

export default App;






