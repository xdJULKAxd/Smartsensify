import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebarStyle.css";

export function Sidebar({ isSidebarVisible }) {
  const [isvisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(isSidebarVisible);
  }, [isSidebarVisible]);

  const toggleVisibility = () => {
    setIsVisible(false);
  };

  return (
    <div className={`sidebar ${isvisible ? "visible" : "hidden"}`}>
      <button onClick={toggleVisibility} className="arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
      <div className="nav-links">
        <div className="icon">
          <i className="fa-solid fa-user icon-user"></i>
        </div>
        <Link to="/login">Zaloguj się</Link>
        <div>
          <i className="fa-solid fa-map"> </i>
          <Link to="/">Mapa</Link>
        </div>
        <div>
          <i className="fa-solid fa-chart-simple"></i>
          <Link to= "/sensors">Analiza danych</Link>
        </div>
        <div>
          <i className="fa-solid fa-magnifying-glass"></i>
         <Link to="/newsensor">Stwórz czujnik</Link>
        </div>
        <div>
          <i className="fa-solid fa-envelope"></i>
          <a href="contact.asp">Powiadomienia</a>
        </div>
        <div>
          <i className="fa-solid fa-heart"></i>
          <a href="about.asp">Ocena aplikacji</a>
        </div>
      </div>
      <div className="bottom-link">
        <div>
          <i className ="fa-solid fa-gears"></i>
          <a href="about.asp">Ustawienia</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
