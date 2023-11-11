import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { Layout } from './pages/layout';
import{Sensors}from './pages/sensors';
 //import{Sensor}from'./pages/Sensor';
import {SensorDetails }from './pages/SensorDetails';
import { LoginPages } from './pages/loginPages';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sensors" element={<Sensors/>}></Route>
         <Route path="/sensor/:id" element={<SensorDetails/>}></Route> 
         <Route path="/login" element={<LoginPages/>}></Route> 
       
      
      </Routes>
    </BrowserRouter>
    </Layout>
  </React.StrictMode>
);
reportWebVitals();
