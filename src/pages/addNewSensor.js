import React, { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {CreatSensor} from '../servises/API';
import './addNewSensorStyle.css';
import { loginContext } from './layout';

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
setMessage("Musisz być zalogowany by stworzyc sensor")
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
          <div className="nazwa">Nazwa czujnika</div>
          <input type="text" value={sensorName} onChange={(e) => setSensorName(e.target.value)} />
        </label>
        <label>
          <div className="Typ">Typ(umieść typy pomiędzy przecinkami)</div>
          <input type="text" value={sensorType} onChange={(e) => setSensorType(e.target.value)} />
        </label>
        <label> 
          <span className="publiczny">Publiczny:</span>
          <input style={{width:"40px",height:"40px"}} type="checkbox" checked={isPublic} onChange={() => setIsPublic(!isPublic)} />
        </label>
        <button onClick={handleSubmit} className="custom-button">
          Dodaj czujnik
        </button>
      {/* </form> */}
    </div>
  );
}

export default AddNewSensor;