import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import './Login.css';
import fetchAuth from './api_fetches/authenticate.ts';


function Login() {
    const [loginAttempt, setLoginAttempt] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        if (loginAttempt) {
            fetchAuth({username:username, password:password}).then(auth => {
                if(auth.authResult) {
                    navigate("/auctions")
                    console.log("User successfully logged in!");
                } else {
                    console.log("User credentials were invalid.");
                }
                setLoginAttempt(false); // Do we want to do that here or outside of the promise???
            });
        }    
    }, [loginAttempt])
    
    return (
        <div className="centered-component">
            <div className="login-group">
                <p>Returning Users May login Here</p>
                <div className="username-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="password-group">
                    <label htmlFor="username">Password:</label>
                    <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <button onClick={() => setLoginAttempt(true)}>Login</button>
                <p>Don't have an account yet? <span><a href="/register" >Create Account</a></span></p>
            </div>
        </div>
    );
}

export default Login;