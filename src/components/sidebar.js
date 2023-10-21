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
        <button onClick={toggleVisibility}>Zamknij</button>
        <div className="nav-links">
          <a href="default.asp">Mapa</a>
          <a href="news.asp">Czujniki</a>
          <a href="contact.asp">Powiadomienia</a>
          <a href="about.asp">Analiza danych</a>
          <a href="about.asp">Ocena aplikacji</a>
          <a href="about.asp">Ustawienia</a>
        </div>
      </div>
    );
  }
  
  export default Sidebar;