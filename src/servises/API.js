
export async function CreatSensor(sensorData){
    const response = await fetch ('http://localhost:3001/sensor' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sensorData),
      
    });
    return response;
}
export async function GetSensors(){
  const response = await fetch ('http://localhost:3001/sensors' , {
    method: 'GET', 
  });
  return response.json();
}
export async function GetSensor(id){
  const response = await fetch (`http://localhost:3001/sensor/${id}` , {
    method: 'GET',
  });
  return response.json();
}


export async function SendAuthorization(loginData){
  const response = await fetch ('http://localhost:3001/login' , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
    
  });
  return response;
}