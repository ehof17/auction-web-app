import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import registerUser from './api_fetches/register.ts';

function Register() {
    const [registerAttempt, setRegisterAttempt] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        if(registerAttempt) {
            registerUser({username:username, password:password}).then(register => {
                if (register) {
                    console.log("User was successfully registered!");
                    navigate("/auctions");
                } else {
                    console.log("User could not be registered.")
                }
                setRegisterAttempt(false); // Do we want to do that here or outside of the promise???
            })
        }
    }, [registerAttempt]);

    return (
        <div className="centered-component">
            <div className="registration-info">
                <p>Enter your info to register</p>
                <div className="username-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="password-group">
                    <label htmlFor="username">Password:</label>
                    <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <button onClick={() => setRegisterAttempt(true)}>Register</button>
            </div>
        </div>
    );
}

export default Register;