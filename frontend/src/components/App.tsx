import React from 'react';
import './App.css';
import { Outlet } from "react-router";

function App() {
  return (
    <div id="login">
      <Outlet/>
    </div>
    
  );
}

export default App;
