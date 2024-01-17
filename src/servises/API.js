
import * as jose from 'jose'

export async function CreatSensor(sensorData){
  const token = localStorage.getItem("token")
    const response = await fetch ('https://smartsensifyv1.onrender.com/api/sensors' , {
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
  
  const response = await fetch ('https://smartsensifyv1.onrender.com/api/sensors' , {
    method: 'GET', 
    headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer '+token,
       
      },
  });
  console.log(response)
  return response.json();
}
export async function GetSensor(id){
  const token = localStorage.getItem("token")
  const response = await fetch (`https://smartsensifyv1.onrender.com/api/sensors/${id}` , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    },
  });
  console.log(response);
  return [ await response.json(), response.status ] 
}


export async function SendAuthorization(loginData){
  const response = await fetch ('https://smartsensifyv1.onrender.com/api/auth/login' , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
    
  });
  return response;
}
export async function CreatAccount(registrationData){
  const response = await fetch ('https://smartsensifyv1.onrender.com/api/auth/register' , {
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
  const response = await fetch (`https://smartsensifyv1.onrender.com/api/sensors/${id}/data` , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    },
  });
  console.log(response);
  return response.json();
}

export async function DeleteSensor(id){
  const token = localStorage.getItem("token")
  const response = await fetch (`https://smartsensifyv1.onrender.com/api/sensors/${id}` , {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer '+token
    },
  });
  console.log(response);
  return response.status
}
export async function CreatGroupSensorIfNotExist(){
  const token = localStorage.getItem("token")
const payload =  jose.decodeJwt(token)
console.log(payload)
const userId = payload.userId
const userGroupsRespons = await fetch (`https://smartsensifyv1.onrender.com/api/groups?userId=${userId}` , {
    method: 'GET',
    headers: {
      'Authorization': token
    },
  });
const userGroup = await userGroupsRespons.json()
if(userGroup.groups.length > 0){
  localStorage.setItem("groupId",userGroup.groups[0]._id)
  return
}
const data = {"name":"NazwaGrupy","description":"Opis"}
  const response = await fetch (`https://smartsensifyv1.onrender.com/api/groups` , {
    method: 'POST',
    headers: {
      'Authorization': token
    },
    body: JSON.stringify(data),
  });
  console.log(response);
  const newUserGroup = await response.json()
  console.log(newUserGroup)
  localStorage.setItem("groupId",newUserGroup.group._id)
}
