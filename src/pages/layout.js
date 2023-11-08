import "./layout.css"
import images from "./images.jpg"
import Sidebar from "../components/sidebar";
import { useState } from "react";
import { Toolbar}  from "../components/toolbar";

export function Layout({ children }) {
  
  
  const linkStyle = {
    '&::hover': {
      backgroundColor: 'blue',
  }
}
const centerStye = {
  textAlign: 'center',
}
const [isvisible, setIsVisible] = useState(false);

const toggleVisibility = () => {
  setIsVisible(!isvisible);}


  return (
    
    <div className="layout">
      <Toolbar onMenuClick={toggleVisibility}/>
    
        <main style={centerStye}>
          
          {children}
          </main>

      <footer>
      </footer>
      <Sidebar isSidebarVisible = { isvisible}/>
    </div>
  );
}

