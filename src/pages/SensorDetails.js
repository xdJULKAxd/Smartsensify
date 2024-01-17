import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './SensorDetailsStyle.css';
import {GetSensor, SensorData,DeleteSensor} from '../servises/API'
import { Area, LineChart,Line, XAxis,YAxis,Tooltip, Bar, CartesianGrid} from 'recharts';
import { loginContext } from './layout';
import { toast } from 'react-toastify';
import { useCurrentPng, useGenerateImage } from 'recharts-to-png';
import FileSaver from 'file-saver';
import { toastConstant } from '../Constants';



export function SensorDetails() {
  const { id } = useParams();
  const [sensor, setSensor] = useState();
const[readings, setReadings] = useState([[{name: 'Page A', uv: 4000, pv: 2400, amt: 2400}]]);
const[message, setMessage] = useState();
const {isLogin,setIsLogin} = useContext(loginContext)
const readingsraw = {data:[]}
const [getPng, { ref: chart }] = useCurrentPng();



function setDensity(step){
  const array = [] 
  console.log(readingsraw)
 const raw  = JSON.parse(localStorage.getItem("raw"))
  for (let index = 0; index < raw.length; index+=step) {
    const element = raw[index];
   array.push(element) 
  }
  setReadings(array)
}

function ConvertToReading(SensorData){
return{
  dataodczytu:SensorData.timestamp,
  temperatura:SensorData.readings[0].value
}
}
async function getChart(){
  const img = await getPng();
if (img) {
  FileSaver.saveAs(img, "div-element.png");
}
}

async function Delete(){
  const status = await DeleteSensor (id)
  switch(status ){
    case 403: toast.error("Brak uprawnień",toastConstant)
     
     break
case 200: {
  toast.success("Pomyślnie usunięto",toastConstant)
setSensor()
break }
 case 401: toast.error("Brak autoryzacji,konieczność zalogowania się",toastConstant)
break
 case 404:toast.error("Nie znaleziono sensora",toastConstant)
break
 default : toast.info("Wystąpił nicodzienny status "+ status ,toastConstant)
  }
 // window.location = "/sensors"
  
}




  useEffect(() => {
    toast.info("Ładowanie...",toastConstant)
     GetSensor(id).then(( [result, status]) =>{
      console.log(result,status)
      if(status === 404){
       toast.error("Nie znaleziono sensora",toastConstant) 
       return 
      }
      if(!result.sensor.isPublic && !isLogin){
       toast.info("Sensor prywatny",toastConstant) 
        return 
      }
      SensorData(id).then(data=>{ 
        console.log(data)
      localStorage.setItem("raw",JSON.stringify(data.map(ConvertToReading) )) 
      setDensity(50)
      })
setSensor(result.sensor)
setMessage("")
     })
   
  }, [id, isLogin]);

  return (
    <div>
    {message && (
      <div className={message.includes("Pomyślnie") ? "sukces" : "blad"}>
        {message}
      </div>
    )}

    {sensor ? (
      <div>
      <h2 className="name">Szczegóły czujnika</h2>
      <p className="sensor-name">Nazwa czujnika: {sensor.name}</p>
      <p className="public-info">Publiczny: {sensor.isPublic ? 'Tak' : 'Nie'}</p>
      {/* {sensor.type} */}
      <p className="typ"> Typ :{ sensor.type ? sensor.type.map( oneType => <p>{oneType}</p>) : <></>} </p> 
      <div className="buttonDensity">
      <button onClick={()=>setDensity(20)}>Ustaw stopień gęsty</button>
          <button onClick={()=>setDensity(70)}>Ustaw stopień średni</button>
          <button onClick={()=>setDensity(120)}>Ustaw stopień rzadki</button>
          </div>
      <LineChart ref={chart} data={readings} width={1200} height={600}margin={{ top: 5, right: 20, bottom: 5, left: 0 }} > 
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
         
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
   
    
      <YAxis stroke="#aaaaaa" />
  <Line dataKey="temperatura" stroke="#00ff00" />
      <XAxis dataKey="dataodczytu">  </XAxis>
      <YAxis> </YAxis>
      <Line dataKey="temperatura" stroke='#000000'> </Line>
        </LineChart>
        <button className="download" onClick={getChart}>Pobierz wykres</button>
      <div class="bottom-bar">
      {isLogin && (<button className="deleteSensor" onClick={Delete}> Usuń sensor</button>)}
      </div>
      </div>
      ):(
      <></>
      )}
      <div className="background"> </div>
      
    </div>
  );
}