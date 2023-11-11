import React, { useState, useEffect } from 'react';
import "./sidebarStyle.css"


export function Sidebar({isSidebarVisible}) {
    const [isvisible, setIsVisible] = useState(false);
    useEffect(()=>{setIsVisible( isSidebarVisible )

    },[isSidebarVisible]
    
    )

  
    const toggleVisibility = () => {
      setIsVisible(false);
    }
  
    return (
      <div className={`sidebar ${isvisible ? 'visible' : 'hidden'}`}>
        <button onClick={toggleVisibility}className="arrow"><i class="fa-solid fa-arrow-right"></i></button>
        <div className="nav-links">
          <div className='icon'><i className="fa-solid fa-user icon-user"></i></div>
          <li className="login">Zaloguj</li>
        <div><i class="fa-solid fa-map"> </i><a href="default.asp">Mapa</a></div>
    <div><i class="fa-solid fa-chart-simple"></i><a href="about.asp">Analiza danych</a></div>
    <div><i class="fa-solid fa-location-dot"></i><a href="news.asp">Czujniki</a></div>
    <div><i class="fa-solid fa-envelope"></i><a href="contact.asp">Powiadomienia</a></div>
    <div><i class="fa-solid fa-heart"></i><a href="about.asp">Ocena aplikacji</a></div>
    </div>
    <div className="bottom-link">
    <div><i class="fa-solid fa-gears"></i><a href="about.asp">Ustawienia</a></div>
        </div>
      </div>
    );
  }
  
  export default Sidebar;