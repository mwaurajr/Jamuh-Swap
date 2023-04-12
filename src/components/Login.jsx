import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login({setIsAuthorized}) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:3000/login', { email: email, password: password })
      .then((response) => {
     
        navigate('/dashboard'); // Navigate to the dashboard page
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <>
      <div className="login-container">
        <h2>Login To P-Swap</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />

          <button type="submit">Login</button>
          <div className="alt">
            Don't have an account?{' '}
            <Link to="/signup" className="link">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
