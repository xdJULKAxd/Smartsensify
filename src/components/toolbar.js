import React from 'react';
import "./toolbarStyle.css";

export function Toolbar({onMenuClick}) {

  return (
    <div className="toolbar">
      <button onClick={()=>onMenuClick()}> <i class="fa-solid fa-bars"></i></button>
      <div>
         Logo
          </div>
          <button>
            Szukaj
             </button>
    </div>
  );
}
