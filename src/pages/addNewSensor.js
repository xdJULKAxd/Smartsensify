import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {CreatSensor} from '../servises/API';
import './addNewSensorStyle.css';

export function AddNewSensor() {
  const navigate = useNavigate();
  const [sensorName, setSensorName] = useState('');
  const [isPublic, setIsPublic] = useState(true);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const sensorData = {
      name: sensorName,
      isPublic,
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
      <div className="custom-header">Dodaj nowy czujnik</div>
      <form onSubmit={handleSubmit} className="custom-form">
        <label>
          <div className="nazwa">Nazwa czujnika</div>
          <input type="text" value={sensorName} onChange={(e) => setSensorName(e.target.value)} />
        </label>
        <label>
          <input type="checkbox" checked={isPublic} onChange={() => setIsPublic(!isPublic)} />
          <div className="publiczny">Publiczny:</div>
        </label>
        <button type="submit" className="custom-button">
          Dodaj czujnik
        </button>
      </form>
    </div>
  );
}

export default AddNewSensor;