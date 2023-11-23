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
    const response = CreatSensor(sensorData)
    if (response.status === 200) {
      
      const data = await response.json();
      navigate(`/sensor/${data.sensor._id}`);
    } else {
   
    }
  };

  return (
    <div>
      <div className="nowy"></div>
      <h2>Dodaj nowy czujnik</h2>
      <form onSubmit={handleSubmit}>
        <label>
        <div className="nazwa"></div>
          Nazwa czujnika:
          <input type="text" value={sensorName} onChange={(e) => setSensorName(e.target.value)} />
        </label>
        <label>
          Publiczny:
          <input type="checkbox" checked={isPublic} onChange={() => setIsPublic(!isPublic)} />
        </label>
        <button type="submit">Dodaj czujnik</button>
      </form>
    </div>
  );
}

export default AddNewSensor;