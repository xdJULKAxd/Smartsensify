
export async function CreatSensor(sensorData){
  const token = localStorage.getItem("token")
    const response = await fetch ('https://smartsensify.onrender.com/api/sensors' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(sensorData),
      
    });
    return response;
}
export async function GetSensors(){
  const token = localStorage.getItem("token")
  const response = await fetch ('https://smartsensify.onrender.com/api/sensors' , {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
  });
  return response.json();
}
export async function GetSensor(id){
  const token = localStorage.getItem("token")
  const response = await fetch (`https://smartsensify.onrender.com/api/sensors/${id}` , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
  });
  console.log(response);
  return [ await response.json(), response.status ] 
}


export async function SendAuthorization(loginData){
  const response = await fetch ('https://smartsensify.onrender.com/api/auth/login' , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
    
  });
  return response;
}
export async function CreatAccount(registrationData){
  const response = await fetch ('https://smartsensify.onrender.com/api/auth/register' , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registrationData),
    
  });
  return response;
}
export async function SensorData(id){
  const token = localStorage.getItem("token")
  const response = await fetch (`https://smartsensify.onrender.com/api/sensors/${id}/data` , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
  });
  console.log(response);
  return response.json();
}

export async function DeleteSensor(id){
  const token = localStorage.getItem("token")
  const response = await fetch (`https://smartsensify.onrender.com/api/sensors/${id}` , {
    method: 'DELETE',
    headers: {
      'Authorization': token
    },
  });
  console.log(response);
  return response.status
}