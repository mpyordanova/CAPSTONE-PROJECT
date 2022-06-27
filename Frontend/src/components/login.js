import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [loginFormData, setLoginFormData] = useState({
    loginUsername: "",
    loginPassword: ""
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.username]: event.target.value });
  }

  const handleChangeLogin = (event) => {
    setLoginFormData({ ...loginFormData, [event.target.username]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:5000/users', formData)
    console.log(response);
    localStorage.setItem("jwtToken", response.data.jwtToken)
  }

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:5000/users/login', {
      username: loginFormData.loginUsername,
      password: loginFormData.loginPassword
    });
    console.log(response);
    localStorage.setItem("jwtToken", response.data.jwtToken);
  }

  return (
    <div>
      <h1>Register!</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username:</label>
        <input username="username" id="username" onChange={handleChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" username="password" id="password" onChange={handleChange} />
        <input type="submit" />
      </form>

      <hr />

      <h1>Log In!</h1>

      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="loginUsername">username:</label>
        <input username="loginUsername" id="loginUsername" onChange={handleChangeLogin} />
        <label htmlFor="loginPassword">Password:</label>
        <input type="password" username="loginPassword" id="loginpassword" onChange={handleChangeLogin} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login