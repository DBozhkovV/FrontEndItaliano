import React, { useState } from "react";
import Background from './components/Background.js';
import NavbarComponent from "./components/Navbar.js";
import TextBox from "./components/TextBox.js"
import NewsPhoto from "./components/NewsPhoto"

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Background/>
      <TextBox/>
      <NewsPhoto/>
    </div>
  );
}

export default App;