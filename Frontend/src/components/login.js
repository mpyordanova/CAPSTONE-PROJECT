import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email:""
  });

  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: ""
  });
  const navigate= useNavigate()
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleChangeLogin = (event) => {
    setLoginFormData({ ...loginFormData, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:5000/user/register', formData)
    console.log(response);
    localStorage.setItem("jwtToken", response.data.jwtToken)
  }

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log(loginFormData)
    const response = await axios.post('http://localhost:5000/user/login', loginFormData);
    console.log(response);
    localStorage.setItem("jwtToken", response.data.jwtToken);
    navigate('/Posts')
  }
console.log(loginFormData)
  return (
    <div className='login-box'>
      <div className='sign-form'>
      <h1>Register!</h1>

      <form className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="username1">username:</label>
        <input name="username" id="username1" onChange={handleChange} />
        <label htmlFor="email">email:</label>
        <input type='email' name='email' id="email" onChange={handleChange}/>
        <label htmlFor="password1">Password:</label>
        <input type="password" name="password" id="password1" onChange={handleChange} />
        <input type="submit" />
      </form>
      </div>
      <hr />
<div className='log-form'>
      <h1>Log In!</h1>

      <form className="loginForm" onSubmit={handleLoginSubmit}>
        <label htmlFor="username">username:</label>
        <input name="username" id="username" onChange={handleChangeLogin} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" onChange={handleChangeLogin} />
        <input type="submit" />
      </form>
      </div>
    </div>
  )
}

export default Login