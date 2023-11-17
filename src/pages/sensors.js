import "./sensorsStyle.css"
import React from 'react';
import { useEffect, useState} from "react";
import { GetSensors } from "../servises/API";
export function Sensors() {

  const [sensors, setSensors] = useState( []);
  
  useEffect(() => {
    GetSensors().then( result =>{
      console.log(result)
setSensors(result.sensors)  
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
        {(index === 0 || index === 1) && ( // Warunek dla sensor-0 i sensor-1
            <button className="information">Więcej informacji</button>
          )}
          
      </div>
      
    ))}
   
    <div className="bottom-plus">
      <i className="fa-solid fa-plus"></i>
      </div>
  </div>
  
);
}

export default Sensors;