
export async function CreatSensor(sensorData){
    const response = await fetch('https://smartsensify.onrender.com/api/sensors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sensorData),
      
    });
    return response;
}
