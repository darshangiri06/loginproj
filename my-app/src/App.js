import './App.css';
import React from "react";
import  {useState}  from 'react';
import Home from './Home';

const App= ()=>{
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [isLoggedIn,setIsLoggedIn] = useState(false);
  
    function handleSubmit(){
      window.alert('cool! you are logged in')
      setIsLoggedIn(true);
    }
    return(
      <>
        
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
        <span className="psw"><a href="C:\Users\darshan.giri\Desktop\dish_test\my-app\src\Home.js">Forgot password?</a></span>
      </div>
  </form>
  
  }
  
  {isLoggedIn &&  <Home name={name} /> }
      </>
      
    )}

  export default App;  
 

