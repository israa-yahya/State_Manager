// File: App.js
import React from "react";
import { ContextProvider } from "./components/context/contextProvider";
import MyComponent from "./components/MyComponent/MyComponent";
// import { Component1 } from './components/Example2/Component1';
import Counter from './components/Counter/Counter';

const App = () => {
  return (
    <>
    {/* <Component1/> */}
    {/* <Counter/> */}
      <ContextProvider>
        <div className="App">
          <h1>My App</h1>
          <MyComponent />
        </div>
      </ContextProvider>
    </>
  );
};

export default App;
