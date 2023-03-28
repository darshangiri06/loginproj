import React from "react";
import { useEffect, useState } from 'react';
import LoginHome from './Home';
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'


const Login= ()=>{
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [isLoggedIn,setIsLoggedIn] = useState(false);
  
    function handleSubmit(){
      window.alert('cool! you are logged in')
      setIsLoggedIn(true);
    }
    return(
      <>
        <div class="navbar">
          <Link to="/"><i class="fa fa-fw fa-home"></i>Home</Link>
          <Link to="/contact"><i class="fa fa-fw fa-envelope"></i>Home</Link>
        </div>
      {
        !isLoggedIn && 
    <form >
      
      <span>Login Form</span>
      <div className="container ">
        <div className="row">
        <label htmlFor="name"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="name" value={name} onChange={(val)=>setName(val.target.value)} required/>
        </div>
          
        <div className="row">
        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(val)=>setPassword(val.target.value)} required/>
        </div>
  
        <button onClick={handleSubmit}>Login</button>
      
      </div>
  
      <div className="container-2" >
        <button type="button" className="cancelbtn">Cancel</button>
        <span className="psw"><a href="C:\Users\darshan.giri\Desktop\dish_test\my-app\src\loginHome.js">Forgot password?</a></span>
      </div>
  </form>
  
  }
  
  {isLoggedIn &&  <LoginHome name={name} /> }
      </>
      
    )}
  export default Login  