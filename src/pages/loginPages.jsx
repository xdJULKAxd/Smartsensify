import { useState,useContext } from "react";
import "./loginPagesStyle.css";
import { SendAuthorization, CreatAccount } from "../servises/API";
import { loginContext } from './layout';
import { toastConstant } from '../Constants';
import { toast } from "react-toastify";
import Spiner from '../images/12-dots-scale-rotate.svg?react';
export function LoginPages() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [username, setName] = useState("");
  const [isLogin, setisLogin] = useState(true);
  const [message, setMessage] = useState("");
  const loginCont = useContext(loginContext)
  const [loading,setLoading]= useState(false);
  function send() {
    setLoading(true)
    if (isLogin) {
      SendAuthorization({ identifier: login, password })
        .then(async (res) => {
          const json = await res.json();
          if (res.status !== 200) {
            setMessage(json.error);
            return;
          }
          
          localStorage.setItem("token", json.token);
          window.location = "/";
        })
        .catch((error) => console.log(error));
    } else {
      CreatAccount({ email: login, password, username })
        .then(async (res) => {
          const json = await res.json();
          if (res.status !== 201) {
            setMessage(json.error);
            return;
          }
          setLoading(false)
          setisLogin(true);
          toast.success("Udana rejestracja, możliwe logowanie",toastConstant);
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div>
    <div className="container">
      <div >{message}</div>
      {loading && (<img src={Spiner} alt="Your SVG" />)}
      {isLogin?
        <div>
        <div className="login1"> Zaloguj się</div>
        <div className="form-group">
          <input type="text" required value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Hasło" />

        </div>
        <button className="login-button" onClick={send}>Zaloguj się teraz</button>
      </div>:
      <div>
        <div className="register">Rejestracja</div>
        <div className="form-group">
          <input type="text" required value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Email" />
        </div>
        <div className="form-group1">
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Hasło" />
        </div>
        <div className="form-group2">
          <input type="text" required value={username} onChange={(e) => setName(e.target.value)} placeholder="Username" />
        </div>
        
        <button  onClick={send}>Zarejestruj się</button>
        
      </div>}
      <div className="footer">
        <div className="info">Cześć, miło cię poznać!</div>
        
        <p>
          <a  className="info" href="#">Zapomniałeś hasła?</a> | <button className="brakkonta " onClick={()=>setisLogin(!isLogin)}>{isLogin ? "Nie masz konta?" : "Zaloguj się!" }</button>
        </p>
       
        </div>
      </div>
    </div>
  );
}