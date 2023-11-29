
import { useState } from 'react'
import './loginPagesStyle.css'
import { SendAuthorization } from '../servises/API'
export function  LoginPages(){

 const[ login, setLogin] = useState("")
 const[ password, setPassword] = useState("")
 const [Username,setName] = useState("")
 const [isLogin, setisLogin] = useState(true)
    function send(){
SendAuthorization({login,password}).then( (res)=> res.json() )
.then( (json) => {
localStorage.setItem("token",json.token);


}) 
.catch( (error) => console.log(error) )
    }

    return (
        <div className="container">
          <div className="logo">Smartsensify</div>
          {isLogin?
            <div>
            
            <p>Zaloguj się</p>
            <div className="form-group">
              <input type="text" required value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Hasło" />
            </div>
            <button onClick={send}>Zaloguj się teraz</button>
          </div>:
          <div>
            <p>Rejestracja</p>
            <div className="form-group">
              <input type="text" required value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Hasło" />
            </div>
            <div className="form-group">
              <input type="text" required value={Username} onChange={(e) => setName(e.target.value)} placeholder="Username" />
            </div>
            <button onClick={send}>Zaloguj się teraz</button>
          </div>}
          <div className="footer">
            <p>Cześć, miło cię poznać!</p>
            <p>
              <a href="#">Zapomniałeś hasła?</a> | <button onClick={()=>setisLogin(!isLogin)}>{isLogin ? "Nie masz konta?" : "Zaloguj się!" }</button>
            </p>
          </div>
        </div>
      );
    }