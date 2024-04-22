// File: MyComponent.js
import React, { useContext } from 'react';
import {MyContext}  from '../context/contextProvider';

const MyComponent = () => {
  // Access context data using useContext hook
  const { data, login, logout } = useContext(MyContext);

  return (
    <div>
      {data.isAuthenticated ? (
        <div>
          <p>Welcome, {data.user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ name: 'Israa' })}>Login</button>
      )}
    </div>
  );
};

export default MyComponent;
