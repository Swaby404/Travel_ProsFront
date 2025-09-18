////home page handles login and register popups and sends user to discover page!
 
import { useState } from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";


const Home = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    return (
        <div className="App">
            <h1>
                <img src="https://tse2.mm.bing.net/th/id/OIP.4ZMqbmWfLpV8V31xizwsUAHaHa?pid=Api&P=0&h=220" alt="Travel Critics" />
            </h1>
            <h1>Welcome to the Travel Pros Home</h1>
            <p>Your one-stop destination for all travel-related discussions and reviews.</p>
            
            <p>Happy traveling and happy reviewing!</p>
            <>
                <button onClick={() => setShowLogin(true)}>Discover</button>
                <button onClick={() => setShowRegister(true)}>Register</button>
                {showLogin && <Login toggle={() => setShowLogin(false)} />}
                {showRegister && <Register toggle={() => setShowRegister(false)} />}
            </>
        </div>
    );
};

export default Home;