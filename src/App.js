import React from "react";
import Car from "./components/pages/Car.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import NewsPhoto from './components/NewsApi/NewsPhoto';
import Layout from './components/hocs/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/car/:carId" element={<Car />} />  
          <Route exact path="/news" element={<NewsPhoto/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;