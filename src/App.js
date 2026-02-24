import React, { useState, useEffect } from 'react';
import Login from './Login';
import Landing from './Landing';

export default function App() {
  const [username, setUsername] = useState(() => localStorage.getItem('username') || '');

  useEffect(() => {
    if (username) localStorage.setItem('username', username);
    else localStorage.removeItem('username');
  }, [username]);

  const handleLogin = (name) => setUsername(name);
  const handleLogout = () => setUsername('');

  return (
    <div className="app-container">
      {!username ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Landing username={username} onLogout={handleLogout} />
      )}
    </div>
  );
}
