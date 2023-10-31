import "./sensorsStyle.css"
import React from 'react';
import { sensorData } from "../models/database";
export function Sensors() {

return (
  <div>
    {sensorData.map((sensor, index) => (
      <div className="sensorElement">
        <h3>{sensor.name}</h3>
        <ul>
          {sensor.data.slice(0, 2).map((item, idx) => (
            <li>
              <p>{item.type}</p>
              <p>Last Value: {item.value} {item.unit}</p>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
}

export default Sensors;