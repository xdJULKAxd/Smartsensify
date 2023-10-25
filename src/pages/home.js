import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "./homeStyle.css";
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
        <button className="sonsor">
          <i className="fa-solid fa-bars"></i>
        </button>
        <button className="location">
          <i className="fa-sharp fa-solid fa-location-pin"></i>
        </button>
      </div>
    </div>
  );
}
