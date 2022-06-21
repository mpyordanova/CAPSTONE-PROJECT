import React from 'react'
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import { Route, Routes, useNavigate} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header search={search} handleChange={handleChange} handleSubmit={handleSubmit} />
     <Main/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Favorites' element={<Favorites/>}/>
       <Route path='/Beach' element={<Beach/>}/>
       <Route path='/Mountain' element={<Mountain/>}/>
       <Route path='/City' element={<City/>}/>
       <Route path='/Culture' element={<Culture/>}/>
     </Routes>
    </div>
  );
}

export default App;





{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
