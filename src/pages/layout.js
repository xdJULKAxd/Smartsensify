import "./layout.css"
import images from "./images.jpg"

export function Layout({ children }) {
  const myStyle = {
    color: "white",
    backgroundColor: "#bdbebd",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };
  const navigationStyle = {
    listStyleType: "none",
    backgroundColor: "#d3d3d3",
    padding:"20px",
    fontSize:"18px",
    width:"50%"
    
  }
  const linkStyle = {
    '&::hover': {
      backgroundColor: 'blue',
  }
}
const centerStye = {
  textAlign: 'center',//Wyśrodkować tekst
}

  return (
    <div className="layout">
        <main style={centerStye}>
          
          {children}
          </main>
      <div style={myStyle}>
        <ul style={navigationStyle}>
          <br/>
        <div> Zaloguj się </div>
        <div><img src={images} alt="Obazek" height="200px"/> </div>
          <li>
            <a href="default.asp">Mapa</a>
          </li>
          <li>
            <a style={linkStyle} href="news.asp">Czujniki</a>
            
          </li>
          <li>
            <a href="contact.asp">Powiadomienia</a>
          </li>
          <li>
            <a href="about.asp">Analiza danych </a>
          </li>
          <li>
            <a href="about.asp">Ocena aplikacji </a>
          </li>
          <li>
            <a href="about.asp">Ustawienia </a>
          </li>
        </ul>
        <br />
      </div>
      <footer>

        Ustawienia
      </footer>
    </div>
  );
}
