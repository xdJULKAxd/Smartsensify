import "./sensorsStyle.css"
import React from 'react';
import { sensorData } from "../models/database";
export function Sensors() {

return (
  <div>
    <div className="name">Lista czujników</div>

    {sensorData.map((sensor, index) => (
      <div className={`sensorElement sensor-${index}`} key={sensor.id}>
        <h3>{sensor.name}</h3>
        <ul>
          {sensor.data.slice(0, 2).map((item) => (
              <div key={item.type}>
              <p>{item.type}</p>
              <p>Last Value: {item.value} {item.unit}</p>
            </div>
          ))}
          
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