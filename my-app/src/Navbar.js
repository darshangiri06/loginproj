
import React from "react";
import './App.css';
import {  Link } from "react-router-dom";
import img from "./logo_nav.png"
function Navbar({isLoggedIn,setIsLoggedIn,name,setName}) {
    function handleLogout(){
        console.log("logged out")
        setIsLoggedIn(false)
        setName('')
    }
  return (
      <div className="row navbar">
        <img src={img} alt=""  style={{width: "60px"}}/>
        <span className="left">{name}</span>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          {
            !isLoggedIn ?
          <Link to="/Signin">Signin</Link>
          :
          <span className='right' onClick={handleLogout} >Signout</span>
          }
      </div>
  );
}

export default Navbar;