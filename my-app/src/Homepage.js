import React from 'react';
  
const Homepage = (props) => {
  return (
    <div>
      {
        props.isLoggedIn ? <span><h3>You are logged in </h3></span> : <span>Not logged in </span>
      }
      <h1>Welcome to Homepage {props.name}</h1>
    </div>
  );
};
  
export default Homepage;