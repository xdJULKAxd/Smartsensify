import React, { useState, useEffect, useContext, useReducer } from "react";
import { Link, useNavigate} from "react-router-dom";
import "./sidebarStyle.css";
import { loginContext } from "../pages/layout";


function useForceUpdate() {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  return () => forceUpdate();
}
export function Sidebar({ isSidebarVisible }) {
  const [isvisible, setIsVisible] = useState(false);
  const {isLogin,setIsLogin} = useContext(loginContext)
  const handleForceupdateMethod = useForceUpdate();
  const navigate = useNavigate();
  useEffect(() => {
    setIsVisible(isSidebarVisible);
  }, [isSidebarVisible]);

  

  function Login (){
    if(isLogin){
      localStorage.removeItem("token"); 
      setIsLogin(false);
    }
else{ navigate("/login") }

  }
  const toggleVisibility = () => {
    setIsVisible(false);
  };

  return (
    
    <div className={`sidebar ${isvisible ? "visible" : "hidden"}`}>
      <button onClick={toggleVisibility} className="arrow">
        <i class="fa-solid fa-arrow-right "></i>
      </button>
      <div className="nav-links">
        <div className="icon">
          <i className="fa-solid fa-user icon-user"></i>
        </div >
        <div className="login button">
        <button onClick={()=>Login()}>{isLogin? "Wyloguj się":"Zaloguj się" } </button>
        </div>
        <div>
          <i className="fa-solid fa-map mr"> </i>
          <Link to="/">Mapa</Link>
        </div>
        <div>
          <i className="fa-solid fa-chart-simple mr"></i>
          <Link to= "/sensors">Analiza danych</Link>
        </div>
        <div>
          <i className="fa-solid fa-magnifying-glass mr"></i>
         <Link to="/newsensor">Stwórz czujnik</Link>
        </div>
        <div>
          <i className="fa-solid fa-heart mr"></i>
          <Link to="/opinion">Ocena aplikacji</Link>
        </div>
      </div>
      <div className="bottom-link">
        <div>
          <i className ="fa-solid fa-gears mr"></i>
          <Link to="/help">Pomoc</Link>
        </div>
      </div>
    </div>
    
  )
}

export default Sidebar;
