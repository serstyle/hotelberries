import React, { useContext } from 'react';
// components
import CustomMap from './CustomMap';
// context
import hotelsContext from '../context/hotel/hotelsContext';

export default function HotelsAround() {
  const HotelsContext = useContext(hotelsContext);
  return (
    <CustomMap
      hotelById={HotelsContext.hotels}
      centerUser
      height="35"
      filter={HotelsContext.filter}
    />
  );
}
