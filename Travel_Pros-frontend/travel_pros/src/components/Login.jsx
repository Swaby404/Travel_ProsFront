//login provides popup for user to login, upon submission user is sent to discover page!
import { useState } from 'react';


export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function handleLogin(e) {
        e.preventDefault();
        // Code to handle login goes here
        if (props.toggle) props.toggle();
    }
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Login Below</h2>
                <form onSubmit={handleLogin}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </label><br></br>

                    <label>
                        Password:
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </label><br></br><br></br>
                    <button type="submit">submit</button>
                </form>
                <button onClick={props.toggle}>Close</button>
            </div>
        </div>
    );
}