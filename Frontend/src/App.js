import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Login from './components/login';
import Posts from './components/Posts';




const App =()=> {
  
//   const [posts, setPosts] = useState([])
//   const navigate = useNavigate()

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     const fetchPosts = async () => {
// const res = await axios.get('http://localhost:5000/posts', {
//   headers: {
//     "JWT-Token": localStorage.jwtToken
//   }
// });
// // console.log(response);
// setPosts(res.data.posts)
// navigate('/posts')
// }
// fetchPosts();
// }


      
  // function handleChange(event) {
  //   // name from html part
  //   setSearch({ ...search, [event.target.name]: event.target.value });
  // }
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






