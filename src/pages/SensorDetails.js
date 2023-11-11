import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SensorDetailsStyle.css';



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
  setSensor({
  })
  
    fetchSensorData();
  }, [id]);


  if (!sensor) {
    return <div>Ładowanie...</div>;
  }
  return (
    <div>
      <h2 className="name">Szczegóły czujnika</h2>
      <p className="sensor-name">Nazwa czujnika: {sensor.name}</p>
      <p className="public-info">Publiczny: {sensor.isPublic ? 'Tak' : 'Nie'}</p>
      {/* {sensor.type} */}
      <p className="typ"> Typ :{ sensor.type ? sensor.type.map( oneType => <p>{oneType}</p>) : <></>} </p> 
      <div class="bottom-bar">
      <button className="deleteSensor"> Usuń sensor</button>
      </div>
      <div className="background"> </div>
      
    </div>
  );
}