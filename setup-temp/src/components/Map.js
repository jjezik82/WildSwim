import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const { data } = await axios.get('/api/places');

      setPlaces(data);
    };

    fetchPlaces();
  }, []);

  return (
    <MapContainer
      center={[48.72480390748317, 19.45311327923514]}
      zoom={8}
      scrollWheelZoom={true}
      className='map-container'
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {places.map((place) => (
        <Marker
          key={place._id}
          position={[place.position.lat, place.position.lng]}
        >
          <Popup>
            {place.title} <br />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
