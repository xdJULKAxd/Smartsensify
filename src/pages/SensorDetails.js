import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SensorDetailsStyle.css';
import {GetSensor, SensorData,DeleteSensor} from '../servises/API'
import { LineChart,Line, XAxis,YAxis } from 'recharts';






export function SensorDetails() {
  const { id } = useParams();
  const [sensor, setSensor] = useState({ name: '', isPublic: false });
const[readings, setReadings] = useState([]);



function ConvertToReading(SensorData){
return{
  dataodczytu:SensorData.timestamp,
  temperatura:SensorData.readings[0].value

  

}
}

async function Delete(){
  await DeleteSensor (id)
 // window.location = "/sensors"
  
}




  useEffect(() => {
     GetSensor(id).then( result =>{
      SensorData(id).then(data=>{ 
      setReadings(data.map(ConvertToReading)) 
      console.log(data.map(ConvertToReading))
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
      <LineChart data={readings} width={500} height={400}> 
      <XAxis dataKey="dataodczytu">  </XAxis>
      <YAxis> </YAxis>
      <Line dataKey="temperatura" stroke='#000000'> </Line>
        </LineChart>
      <div class="bottom-bar">
      
      <button className="deleteSensor" onClick={Delete}> Usuń sensor</button>
      </div>
      <div className="background"> </div>
      
    </div>
  );
}