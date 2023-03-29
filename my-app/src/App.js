import './App.css';
import React from "react";
import Homepage from './Homepage';
import Contact from './Contact';
import Signin from './Signin';
import Navbar from './Navbar';
import {useState } from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [isLoggedIn,setIsLoggedIn] = useState(false);
  

    return (
      <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} name={name} setName={setName}/>
        <Routes>
            {/* passing props to routes */}
            <Route exact path='/'  Component={() => <Homepage name={name} isLoggedIn={isLoggedIn}/>} />
            <Route path='/contact' Component={() => <Contact name={name} isLoggedIn={isLoggedIn}/>}/>
            <Route path='/Signin'  Component={()=>  <Signin name={name} setName={setName} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}  password={password} setPassword={setPassword} /> } />
        </Routes>
      </Router>
  );
}
export default App;

