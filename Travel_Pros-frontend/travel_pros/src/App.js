
////this page is the homepage of the website, must sign up or log in for more content!
import React from 'react';
import './App.css';

import { useState } from 'react'
  
 
 


function App() {
   const [user, setUser] = useState(null);

  return (
    <div className="App">
     <h1><img src="https://tse2.mm.bing.net/th/id/OIP.4ZMqbmWfLpV8V31xizwsUAHaHa?pid=Api&P=0&h=220" alt="Travel Pros" /></h1>
      <h1>Welcome to the Travel Pros!</h1>
      <button><a className="App-link" href="/login">Login</a></button><br></br>
      <button><a className="App-link" href="/signup">Sign Up</a></button>
    
       <p>Your one-stop destination for all travel-related discussions and reviews.</p>
        <p>Explore our curated list of countries below and click on any country to read reviews, share your experiences, and connect with fellow travelers.</p>
         
        <p>Happy traveling and happy reviewing!</p>
        
       
    </div>
  );
}
export default App;
