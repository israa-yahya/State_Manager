// File: ContextProvider.js
import React, { createContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider component
const ContextProvider = ({ children }) => {
  // Define state or any data you want to provide
  const [data, setData] = useState({
    user: null,
    isAuthenticated: false,
  });

  // Define any functions to manipulate the state if needed
  const login = (userData) => {
    setData({
      user: userData,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    setData({
      user: null,
      isAuthenticated: false,
    });
  };

  // Provide the state and functions through the context
  return (
    <MyContext.Provider value={{ data, login, logout }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
