import React, { useState } from "react";
import { Link } from "react-router-dom";


const Signin= (props)=>{
    const [name,setName] = useState(null)
    const [password,setPassword] = useState(null);
    const [error,setError] = useState(null)

    function handleSubmit (){
      if(name && password){
      props.setName(name);
      props.setPassword(password);
      props.setIsLoggedIn(true);
      }
      else{
        setError("Please fill all fields..")
      }
        
    }
    return(
      <>
      {
        !props.isLoggedIn && 
    <form  >
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
        <div className="error">
          {error}
        </div>

        
      
      </div>
  
      <div className="container-2" >
        <button type='submit' onClick={handleSubmit} >Login</button>
        
        <span className="psw"><Link href="/">Forgot password?</Link></span>
      </div>
  </form>
  
  }
  
  {props.isLoggedIn &&  
    <div className="container">
      <h4> Logged in </h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptas recusandae est vitae repellendus facere possimus! Possimus exercitationem est obcaecati optio unde minus omnis culpa amet esse, nostrum porro eos.</p>
    </div> }
      </>
      
    )}
  export default Signin  