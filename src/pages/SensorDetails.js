import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function SensorDetails() {
  const { id } = useParams();
  const [sensor, setSensor] = useState({ name: '', isPublic: false });

  useEffect(() => {
    const fetchSensorData = async () => {
       try {
         const response = await fetch(`https://smartsensify.onrender.com/api/sensors/${id}`);
         if (response.status === 200) {
           const data = await response.json();
           setSensor(data.sensor);
         } else {
           console.error('Błąd pobierania danych czujnika');
        }
       } catch (error) {
         console.error('Błąd sieci: ' + error);
       }
    };
  setSensor({"_id":"64c169b666bca715323efdfa","name":"Public sensor 1","type":["test","test2"],"isPublic":true,"__v":0})
  
    fetchSensorData();
  }, [id]);


  if (!sensor) {
    return <div>Ładowanie...</div>;
  }

  return (
    <div>
      <h2>Szczegóły czujnika</h2>
      <p>Nazwa czujnika: {sensor.name}</p>
      <p>Publiczny: {sensor.isPublic ? 'Tak' : 'Nie'}</p>
      {/* {sensor.type} */}
      { sensor.type ? sensor.type.map( oneType => <p>{oneType}</p>) : <></>}  
    </div>
  );
}

export default SensorDetails;
