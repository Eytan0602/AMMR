import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";

const CENTER = [-12.0200, -77.0600]; 

function pinIcon(color, size = 14) {
  return L.divIcon({
    className: "",
    html: `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${color};border:2px solid rgba(0,0,0,0.6);box-shadow:0 0 0 4px rgba(255,255,255,0.05)"></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

const mockIncidents = [
  { id: 1, coords: [-12.042, -77.095] }, 
  { id: 2, coords: [-12.058, -77.098] }, 
  { id: 3, coords: [-12.072, -77.161] }, 
];

export default function BackgroundMap() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 opacity-40 select-none pointer-events-none background-map-container">
      <MapContainer 
        center={CENTER} 
        zoom={13} 
        zoomControl={false} 
        attributionControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        dragging={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        />
      </MapContainer>
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: "radial-gradient(circle at center, transparent 10%, rgba(0,0,0,0.3) 50%, #000000 100%), linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 75%, #000000 100%)"
        }}
      />
    </div>
  );
}
