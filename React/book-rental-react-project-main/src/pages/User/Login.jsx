import React, { useState } from 'react';
import './Login.css'; // Ensure to create a Login.css file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Reset error and success messages
    setError('');
    setSuccess('');
    
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    
    // Simulate login logic
    console.log('Logging in with', { email, password });
    
    // Simulate successful login
    setSuccess('Login successful!');
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            id="email" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email"
            className="form-input"
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            id="password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password"
            className="form-input"
            required 
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;

