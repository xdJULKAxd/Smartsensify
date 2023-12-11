import "./layout.css"
import Sidebar from "../components/sidebar";
import { useState, createContext} from "react";
import { Toolbar}  from "../components/toolbar";

export const loginContext = createContext({
  isLogin:false,
  setIsLogin: (val) => {}
})
export function Layout({ children }) {
  
 const [isLogin,setIsLogin] = useState(false)
const centerStye = {
  textAlign: 'center',
}
const [isvisible, setIsVisible] = useState(false);

const toggleVisibility = () => {
  setIsVisible(!isvisible);}

  return (
    <loginContext.Provider value={{isLogin,setIsLogin}}>
    <div className="layout">
      <Toolbar onMenuClick={toggleVisibility}/>
    
        <main style={centerStye}>
          
          {children}
          </main>

      <footer>
      </footer>
      <Sidebar isSidebarVisible = { isvisible}/>
    </div>
    </loginContext.Provider>
  );
}

