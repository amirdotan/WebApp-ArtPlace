import React from "react";
import '../styles/Map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import BottomNavigation from '../components/BottomNavigation'


export default function Map () {
    return(
        <>
        <MapContainer center={[31.792346, 35.243131]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[31.792346, 35.243131]}>
            <Popup>
              Mt. Scopus <br /> Deshs Rooach baby
            </Popup>
          </Marker>

        </MapContainer>
        <BottomNavigation />
        </>

      );
}
