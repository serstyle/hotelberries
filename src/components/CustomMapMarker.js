import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layer, Feature, Popup } from 'react-mapbox-gl';

export default function CustomMapMarker({
  hotelById,
  centerUser,
  lat,
  long,
  filter,
}) {
  const [popup, setPopup] = useState(false);
  const [distance, setDistance] = useState('');

  useEffect(() => {
    const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
      function deg2rad(deg) {
        return deg * (Math.PI / 180);
      }
      const R = 6371;
      const dLat = deg2rad(lat2 - lat1);
      const dLon = deg2rad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; // Distance in km
      setDistance(d);
    };

    getDistanceFromLatLonInKm(
      lat,
      long,
      hotelById.location.latitude,
      hotelById.location.longitude
    );
  }, [hotelById, lat, long]);
  const address = `${hotelById.address.streetAddress} ${hotelById.address.city} ${hotelById.address.postalCode}, ${hotelById.address.country}`;
  return (
    distance < filter && (
      <>
        {popup && (
          <Popup
            coordinates={[
              hotelById.location.longitude,
              hotelById.location.latitude,
            ]}
          >
            <div>
              <button
                type="button"
                className="button_close"
                onClick={() => setPopup(false)}
              >
                X
              </button>
              <h2>{hotelById.name}</h2>
              <p>Distance from you : {distance.toFixed(2)} km.</p>
              <p>Address : {address}</p>
              {centerUser ? (
                <Link to={`/hotel/${hotelById.propertyCode}`}>
                  See More Info
                </Link>
              ) : (
                <a
                  href={`https://www.google.com/maps/dir//${hotelById.location.latitude},+${hotelById.location.longitude}/`}
                  alt="google_map_address"
                >
                  See on google map
                </a>
              )}
            </div>
          </Popup>
        )}
        <Layer
          type="symbol"
          id={`marker${hotelById.propertyCode}`}
          layout={{ 'icon-image': 'marker-15' }}
        >
          <Feature
            onClick={() => {
              setPopup(true);
            }}
            coordinates={[
              hotelById.location.longitude,
              hotelById.location.latitude,
            ]}
          />
        </Layer>
      </>
    )
  );
}
