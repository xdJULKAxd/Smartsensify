import "./sensorsStyle.css"
import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState, useContext} from "react";
import { GetSensors } from "../servises/API";
import { loginContext } from './layout';
export function Sensors() {

  const [sensors, setSensors] = useState( []);
  const {isLogin,setIsLogin} = useContext(loginContext)
  
  useEffect(() => {
    GetSensors().then( result =>{
      if(isLogin){
        setSensors(result.sensors)  
      }
      else{
        setSensors(result.sensors.filter((sensor)=>sensor.isPublic))
      }
      console.log(result)
    })
  
 }, []);
 return (
  <div>
    <div className="name">Lista czujników</div>

    {sensors.map((sensor, index) => (
      <div className={`sensorElement sensor-${index}`} key={sensor._id}>
        <h3>{sensor.name}</h3>
        <div>
          {sensor.isPublic}<br/>
          {sensor.type}<br/>
          {sensor.createdAt} <br/>
          {sensor.updatedAt}  <br/>
          </div>
          <div>
            
          </div>
        <ul>
          {/* {sensor.data.slice(0, 2).map((item) => (
              <div key={item.type}>
              <p>{item.type}</p>
              <p>Last Value: {item.value} {item.unit}</p>
            </div>
          ))} */}
         
          
        </ul>
        {(index === 0 || index === 1) }
           <button className="information">Więcej informacji</button>
      </div>
      
    ))}
     <Link to="/newsensor">
    <div className="bottom-plus">
      <i className="fa-solid fa-plus"></i>
      </div>
       </Link>

  </div>
  
);
}

export default Sensors; 