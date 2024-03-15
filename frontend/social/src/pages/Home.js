import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  // ... (existing code remains the same)
  const userJSON = localStorage.getItem('jwtToken');
  const user = userJSON?userJSON:null;

  const handleLogout = ()=>{
    console.log("hyye");
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }


  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Click & Connect</h1> 
        <nav>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/Posts">posts</Link>
          {user?<Link to="/" onClick={handleLogout}>Logout</Link>:(
            <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>
          ) }
          
        
        </nav>
      </header>
       
       < div id="make">
        <div id="div1">
          {/* <img src="imgg.jpg" alt="oops! network"></img> */}
         </div>
        <div id="div2">
       <p id="div2_text"> Welcome! Explore, connect, and discover something new </p>
        </div>

       </div>



     

      {/* <main className="content">
      Welcome! Explore, connect, and discover something new 
      </main>
      <footer className="footer">
        <p>&copy;2024 click&connect.com</p>
      </footer> */}
    </div>
  );
}

