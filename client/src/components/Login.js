import React, { useState } from "react";
import axios from 'axios'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const login = e => {
      e.preventDefault()
      axios.post('http://localhost:5000/api/login', formData)
          .then(req => {
              localStorage.setItem("token", req.data.payload);
              props.history.push("/protected")
              props.setLoggedIn(true)
          })
          .catch(err => {
              console.log(err)
          })
  }

  return (
    <form onSubmit={login}>
      <label>
        Username:
        <input name="username" type="text" value={formData.username} onChange={handleChange}></input>
      </label>
      <label>
        Password:
        <input name="password" type="password" value={formData.password} onChange={handleChange}></input>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Login;
