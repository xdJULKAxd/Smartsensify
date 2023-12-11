import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './SensorDetailsStyle.css';
import {GetSensor, SensorData,DeleteSensor} from '../servises/API'
import { LineChart,Line, XAxis,YAxis } from 'recharts';
import { loginContext } from './layout';





export function SensorDetails() {
  const { id } = useParams();
  const [sensor, setSensor] = useState();
const[readings, setReadings] = useState([]);
const[message, setMessage] = useState();
const {isLogin} = useContext(loginContext)



function ConvertToReading(SensorData){
return{
  dataodczytu:SensorData.timestamp,
  temperatura:SensorData.readings[0].value

  

}
}

async function Delete(){
  const status = await DeleteSensor (id)
  switch(status ){
    case 403: setMessage("Brak uprawnień")
     
     break
case 200: {
  setMessage("Pomyślnie usunięto")
setSensor()
break }
 case 401: setMessage("Brak autoryzacji,konieczność zalogowania się")
break
 case 404:setMessage("Nie znaleziono sensora")
break
 default : setMessage("Wystąpił nicodzienny status "+ status)
  }
 // window.location = "/sensors"
  
}




  useEffect(() => {
    setMessage("Ładowanie...")
     GetSensor(id).then(( [result, status]) =>{
      console.log(result,status)
      if(status === 404){
       setMessage("Nie znaleziono sensora") 
       return 
      }
      if(!result.sensor.isPublic && !isLogin){
        setMessage("Sensor prywatny") 
        return 
      }
      SensorData(id).then(data=>{ 
      setReadings(data.map(ConvertToReading)) 
      console.log(data.map(ConvertToReading))
      })
setSensor(result.sensor)
setMessage("")
     })
   
  }, [id, isLogin]);

  return (
    <div>
      <div> {message}</div>
      {sensor  ?
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
      </div>
      :<></>}
      <div className="background"> </div>
      
    </div>
  );
}