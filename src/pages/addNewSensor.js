import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddNewSensor() {
  const navigate = useNavigate();
  const [sensorName, setSensorName] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sensorData = {
      name: sensorName,
      isPublic,
    };

    // Wysłanie danych do API
    const response = await fetch('https://smartsensify.onrender.com/api/sensors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sensorData),
    });

    if (response.status === 200) {
      // Utworzenie czujnika zakończone sukcesem, przekieruj do widoku szczegółów
      const data = await response.json();
      navigate(`/sensor/${data.sensor._id}`);
    } else {
      // Obsługa błędów, np. wyświetlenie komunikatu
    }
  };

  return (
    <div>
      <h2>Dodaj nowy czujnik</h2>
      <form onSubmit={handleSubmit}>
        <label>
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