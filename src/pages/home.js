import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./homeStyle.css";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <div className="home">
      <MapContainer
        className="map"
        center={[50.0614, 19.9379]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[50.0614, 19.9379]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      
      
        <div className="maptoolbar">
        {" "}
        <Link to="/sensors">
        <button className="sonsor">
          <i className="fa-solid fa-bars"></i> 
        </button>
        </Link>
        <Link to="/help">
        <button className="location">
        <i className="fa-solid fa-location-dot"></i>
        </button>
        </Link>
      </div>
    
    </div>
  );
}
