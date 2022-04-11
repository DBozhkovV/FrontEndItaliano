import React, { useState } from "react";
import Background from './components/Background.js';
import NavbarComponent from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Background/>
    </div>
  );
}

export default App;