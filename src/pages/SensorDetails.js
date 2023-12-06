import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SensorDetailsStyle.css';
import {GetSensor, SensorData} from '../servises/API'



export function SensorDetails() {
  const { id } = useParams();
  const [sensor, setSensor] = useState({ name: '', isPublic: false });
const[readings, setReadings] = useState([])




  useEffect(() => {
     GetSensor(id).then( result =>{
      SensorData(id).then(data=>{ 
      //setReadings(data)  
      console.log(data.map(item=>))
      })
setSensor(result.sensor)
     })
   
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
      {readings}
      <div className="background"> </div>
      
    </div>
  );
}