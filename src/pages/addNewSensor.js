import React, { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {CreatSensor} from '../servises/API';
import './addNewSensorStyle.css';
import { loginContext } from './layout';
import { toastConstant } from '../Constants';
import { toast } from "react-toastify";


export function AddNewSensor() {
  const navigate = useNavigate();
  const [sensorName, setSensorName] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const[sensorType, setSensorType] = useState();
  const {isLogin,setIsLogin} = useContext(loginContext);
  const[message,setMessage] = useState();
   
  
console.log(isLogin)
  const handleSubmit = async (e) => {
    if(!isLogin){
      toast.error("Musisz być zalogowany by stworzyc sensor",toastConstant)
 return
    }
      
      e.preventDefault();

    const sensorData = {
      name: sensorName,
      isPublic,
      type:sensorType.split(',')
    };
    const response = await CreatSensor(sensorData)
    if (response.status < 300) {
      
      const data = await response.json();
      navigate(`/sensor/${data.sensor._id}`);
    } else {
      console.log(response)
    }
  };

  return(
    <div>
      <div>{message}</div>
      <div className="custom-header">Dodaj nowy czujnik</div>
      {/* <form onSubmit={handleSubmit} className="custom-form"> */}
        <label>
          <div className="nazwap">Nazwa czujnika</div>
          <input type="text" value={sensorName} onChange={(e) => setSensorName(e.target.value)} />
        </label>
        <label>
          <div className="Typ">Typ(umieść typy pomiędzy przecinkami)</div>
          <input type="text" value={sensorType} onChange={(e) => setSensorType(e.target.value)} />
        </label>
        <label className="public-label ">
        <span className="publiczny">Publiczny:</span>
        <input style={{ width: "35px", height: "35px" }} type="checkbox" checked={isPublic} onChange={() => setIsPublic(!isPublic)} />
      </label>
      <button onClick={handleSubmit} className="custom-button">Dodaj czujnik</button>
    </div>
  );
}

export default AddNewSensor;