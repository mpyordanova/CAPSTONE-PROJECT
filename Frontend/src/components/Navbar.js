import React from 'react'
// import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import Login from './login'
import Menu from './Menu'
 

const Navbar = ({ handleChange, handleSubmit}) => {

  return (
    <div className='navbar'>
        {/* <SearchBar search={search} handleChange={handleChange} handleSubmit={handleSubmit} /> */}
      {/* <Menu /> */}
      <div className='links'>
        <Link to="/register">Register</Link> |
        <Link to='/login'>Login</Link>
        </div>
        <div className='login-field'>
      <Login/>
      </div>
    </div>

  )
}

export default Navbar;