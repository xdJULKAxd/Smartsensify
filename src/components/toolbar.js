import React from 'react';
import "./toolbarStyle.css";

export function Toolbar({onMenuClick}) {

  return (
    <div className="toolbar">
      <button onClick={() => onMenuClick()} className="menu-button">
    <i className="fa-solid fa-bars"></i>
  </button>
      <div>
      <img src="http://localhost:3000/public/logo.png" alt="Logo" height="200px"/> 
          </div>
          <button>
          <i class="fa-solid fa-magnifying-glass"></i>
             </button>
    </div>
  );
}
