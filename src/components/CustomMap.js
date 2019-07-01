import React, { useState } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';
// components
import CustomMapMarker from './CustomMapMarker';
// hooks
import useGetLocation from '../hooks/useGetLocation';

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_TOKEN,
});
export default function CustomMap({ hotelById, centerUser, height, filter }) {
  const [lat, long] = useGetLocation();
  const [popup, setPopup] = useState(false);

  return (
    lat &&
    long && (
      <Map
        center={
          centerUser
            ? [long, lat]
            : [hotelById[0].location.longitude, hotelById[0].location.latitude]
        }
        // eslint-disable-next-line react/style-prop-object
        style="mapbox://styles/mapbox/basic-v9"
        containerStyle={{
          height: `${height}vh`,
          width: '100%',
        }}
      >
        {hotelById.map(
          (hotel, i) =>
            hotel.location.latitude && (
              <CustomMapMarker
                filter={filter}
                key={i}
                hotelById={hotel}
                centerUser={centerUser}
                lat={lat}
                long={long}
              />
            )
        )}
        {popup && <Popup coordinates={[long, lat]}>You</Popup>}
        <Layer
          type="symbol"
          id="markerUser"
          layout={{ 'icon-image': 'star-15' }}
        >
          <Feature
            onMouseEnter={() => setPopup(true)}
            onMouseLeave={() => setPopup(false)}
            coordinates={[long, lat]}
          />
        </Layer>
      </Map>
    )
  );
}
