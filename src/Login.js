import React, { useState } from 'react';
import kidsImage from './assets/kids.png';

// Hardcoded admin credentials
const ADMIN_CREDENTIALS = [
  { username: 'Kannan', password: 'Admin@123' },
  { username: 'Gana', password: 'Admin@456' },
  { username: 'Vishal', password: 'Admin@789' }
];

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();
  setError('');

  if (!username) {
    setError('Please enter a username');
    return;
  }

  if (!password) {
    setError('Please enter a password');
    return;
  }

  // Check if credentials match any admin user
  const isValidAdmin = ADMIN_CREDENTIALS.some(
    (admin) => admin.username === username && admin.password === password
  );

  if (!isValidAdmin) {
    setError('Invalid username or password. Only authorized admins can access this system.');
    return;
  }

  onLogin(username);
};

  return (
    <div className="login-container">
      <div className="login-background" style={{ backgroundImage: `url(${kidsImage})` }}></div>
      <div className="login-overlay"></div>
      <div className="card login-card">
        <h2>Student Database</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
