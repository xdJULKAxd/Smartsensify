
import { useState } from 'react'
import './loginPagesStyle.css'
import { SendAuthorization } from '../servises/API'
export function  LoginPages(){

 const[ login, setLogin] = useState("")
 const[ password, setPassword] = useState("")
    function send(){
SendAuthorization({login,password}).then( (res)=> res.json() )
.then( (json) => console.log(json) )
.catch( (error) => console.log(error) )
    }
return (
<div> 
<input type="text" required value={login}  onChange={(e)=>setLogin(e.target.value)}/><br/>
<input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} /><br/>
<button onClick={send}> wyślij teraz </button> 

</div>
)

}