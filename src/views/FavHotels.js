/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
// Material UI
import Container from '@material-ui/core/Container';
// context
import hotelsContext from '../context/hotel/hotelsContext';
// components
import ListHotel from '../components/ListHotels';

export default function FavHotels() {
  const HotelsContext = useContext(hotelsContext);
  useEffect(() => {
    HotelsContext.getHotelFromFav();
  }, []);
  return (
    <Container className="container">
      <Helmet>
        <title>Favorites | {process.env.REACT_APP_SITE_TITLE}</title>
      </Helmet>
      <h1>Your Favorites Hotels</h1>
      <h3>You have {HotelsContext.favHotels.length} favorites hotels</h3>
      {HotelsContext.favHotels.length ? (
        <ListHotel hotels={HotelsContext.favHotels} />
      ) : (
        <p>Start adding hotel to your favorite</p>
      )}
    </Container>
  );
}
