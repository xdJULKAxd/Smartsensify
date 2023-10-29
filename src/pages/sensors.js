import "./sensorsStyle.css"
import React from 'react';
function Sensors() {
const sensorData = [
  {
    name: 'Sensor 1',
    data: [
      { type: 'Temperature', value: 25, unit: '°C' },
      { type: 'Humidity', value: 50, unit: '%' },
      // Dodaj więcej typów danych i wartości dla czujnika 1
    ],
  },
  {
    name: 'Sensor 2',
    data: [
      { type: 'Pressure', value: 1013, unit: 'hPa' },
      { type: 'Light', value: 500, unit: 'lux' },
      // Dodaj więcej typów danych i wartości dla czujnika 2
    ],
  },
  // Dodaj więcej obiektów reprezentujących inne czujniki
];

return (
  <div>
    {sensorData.map((sensor, index) => (
      <div key={index} className="sensorElement">
        <h3>{sensor.name}</h3>
        <ul>
          {sensor.data.slice(0, 2).map((item, idx) => (
            <li key={idx}>
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