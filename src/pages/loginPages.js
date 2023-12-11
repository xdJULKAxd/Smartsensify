import { useState,useContext } from "react";
import "./loginPagesStyle.css";
import { SendAuthorization, CreatAccount } from "../servises/API";
import { loginContext } from './layout';
export function LoginPages() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [username, setName] = useState("");
  const [isLogin, setisLogin] = useState(true);
  const [message, setMessage] = useState("");
  const loginCont = useContext(loginContext)
  function send() {
    if (isLogin) {
      SendAuthorization({ identifier: login, password })
        .then(async (res) => {
          const json = await res.json();
          if (res.status !== 200) {
            setMessage(json.error);
            return;
          }
          loginCont.setIsLogin(true)
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
          setisLogin(true);
          setMessage("Udana rejestracja, możliwe logowanie");
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div>
      <div className="logo">Smartsensify</div>
    <div className="container">
      <div >{message}</div>
      {isLogin?
        <div>
        
        <p> Zaloguj się</p>
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
          <input type="text" required value={username} onChange={(e) => setName(e.target.value)} placeholder="Username" />
        </div>
        <button onClick={send}>Zarejestruj się</button>
      </div>}
      <div className="footer">
        <p>Cześć, miło cię poznać!</p>
        <p>
          <a href="#">Zapomniałeś hasła?</a> | <button onClick={()=>setisLogin(!isLogin)}>{isLogin ? "Nie masz konta?" : "Zaloguj się!" }</button>
        </p>
        </div>
      </div>
    </div>
  );
}