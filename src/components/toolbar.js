import React from 'react';
import "./toolbarStyle.css";
import logo from "../images/logo.png";

export function Toolbar({onMenuClick}) {

  return (
    <div className="toolbar">
      <button onClick={() => onMenuClick()} className="menu-button">
    <i className="fa-solid fa-bars"></i>
  </button>
      <div>
      <img src={logo} alt="Logo" height="70px"/> 
          </div>
          <button>
          <i class="fa-solid fa-magnifying-glass"></i>
             </button>
    </div>
  );
}
