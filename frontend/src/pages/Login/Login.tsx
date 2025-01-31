import React, { useState, useEffect, use} from 'react';
import { useNavigate } from 'react-router';
import './Login.css';
import {FormInput} from '../../components';
import {checkUsername, registerUser, fetchAuth} from '../../api_fetches/authController.ts';


function Login() {
    const [loginAttempt, setLoginAttempt] = useState(false);
    const [username, setUsername] = useState('');
    const [isUserInDb, setIsUserInDb] = useState(Boolean);  
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checkedUser, setCheckedUser] = useState(false);

    let navigate = useNavigate();

    const handleCheckUser = async () => {
      if (username === '') {
        return;
      }
      
      const usernamevalid = await checkUsername(username);
      setIsUserInDb(usernamevalid);
      setCheckedUser(true);
     };


    const handleSubmit = async () => {
        if (isUserInDb) {
      
          console.log('Logging in with username:', username, 'password:', password);
            const login = await fetchAuth({username:username, password:password});
            if (login) {
                console.log("User was successfully logged in!");
                navigate("/auctions");
            } else {
                console.log("User could not be logged in.")
            }
         
        } else {
        
          console.log('Signing up with:', username, password, confirmPassword);
            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }
            const register = await registerUser({username:username, password:password});

            if (register) {
                console.log("User was successfully registered!");
                navigate("/auctions");
            } else {
                console.log("User could not be registered.")
            }
        }
      };

    
    return (
        <div className="login-container">

          <h2 className='login-header'>
            Welcome to Auction Web App!
          </h2>
          <p>
            Sign in or create an account to continue
          </p>
        <FormInput
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            clickOffFunc={handleCheckUser}
            
        />
    
          {/* If we’ve confirmed username is in DB then they are logging in */}
          {checkedUser && isUserInDb === true && (
            <>
              <FormInput
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}

              />
              <button className='login-button' onClick={handleSubmit}>
                Log In
              </button>
            </>
          )}
    
          {/* If user not then they are signing up */}
          {checkedUser && isUserInDb === false && (
            <>
              <FormInput
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormInput
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button className='login-button' onClick={handleSubmit}>
                Sign Up
              </button>
            </>
          )}
        </div>
      );
    }


export default Login;