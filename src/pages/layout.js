import "./layout.css"
import Sidebar from "../components/sidebar";
import { useState, createContext} from "react";
import { Toolbar}  from "../components/toolbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const loginContext = createContext({ isLogin:false,
  setIsLogin: (val) => {}})
export function Layout({ children }) {
  

const centerStye = {
  textAlign: 'center',
  
}
const [isLogin,setIsLogin] = useState(localStorage.getItem("token"))

const [isvisible, setIsVisible] = useState(false);

const toggleVisibility = () => {
  setIsVisible(!isvisible);}

  return (
    <loginContext.Provider value={{isLogin,setIsLogin}}>
    <div className="layout">
      <Toolbar onMenuClick={toggleVisibility}/>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
/>
{/* Same as */}
<ToastContainer />
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

