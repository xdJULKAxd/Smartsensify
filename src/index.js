import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { Home } from './pages/home';
import { Layout } from './pages/layout';
import{Sensors}from './pages/sensors';
 //import{Sensor}from'./pages/Sensor';
import {SensorDetails }from './pages/SensorDetails';
import { LoginPages } from './pages/loginPages';
import{AddNewSensor} from './pages/addNewSensor';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sensors" element={<Sensors/>}></Route>
         <Route path="/sensor/:id" element={<SensorDetails/>}></Route> 
         <Route path="/login" element={<LoginPages/>}></Route>
         <Route path="/newsensor" element={<AddNewSensor/>}></Route>
       
      
      </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
serviceWorkerRegistration.unregister();
reportWebVitals();
