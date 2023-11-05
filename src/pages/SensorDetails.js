import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function SensorDetails() {
  const { id } = useParams();
  const [sensor, setSensor] = useState({name:'qwe', isPublic:true});

  useEffect(() => {
    
    // const fetchSensorData = async () => {
    //   const response = await fetch(`https://smartsensify.onrender.com/api/sensors/${id}`);
    //   if (response.status === 200) {
    //     const data = await response.json();
    //     setSensor(data.sensor);
    //   }
    // };

    // fetchSensorData();
  }, [id]);

  // if (!sensor) {
  //   return <div>Ładowanie...</div>;
  // }

  return (
    <div>
      <h2>Szczegóły czujnika</h2>
      <p>Nazwa czujnika: {sensor.name}</p>
      <p>Publiczny: {sensor.isPublic ? 'Tak' : 'Nie'}</p>
     
    </div>
  );
}

export default SensorDetails;
