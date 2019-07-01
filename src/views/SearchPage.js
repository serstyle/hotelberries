/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
// Material UI
import Container from '@material-ui/core/Container';
// context
import hotelsContext from '../context/hotel/hotelsContext';
// components
import Searchform from '../components/Searchform';
import ListHotels from '../components/ListHotels';

export default function SearchPage() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const HotelsContext = useContext(hotelsContext);
  useEffect(() => {
    HotelsContext.getHotelFromFav();
  }, []);
  const handleSearch = (name, city) => {
    HotelsContext.handleSearchHotels(name, city);
    setName(name);
    setCity(city);
  };
  return (
    <Container className="container">
      <Helmet>
        <title>Search | {process.env.REACT_APP_SITE_TITLE}</title>
      </Helmet>
      <h2>
        Search result for : {name || null} {city || null}{' '}
      </h2>
      <Searchform submit={handleSearch} />
      {HotelsContext.searchHotels.length ? (
        <div>
          <h1>Search results : {HotelsContext.searchHotels.length} hotels</h1>
          <ListHotels
            favHotels={HotelsContext.favHotels}
            hotels={HotelsContext.searchHotels}
          />
        </div>
      ) : HotelsContext.isError ? (
        <p>No match found! Please try again.</p>
      ) : (
        <p>Start searching hotels using the Search Bar</p>
      )}
    </Container>
  );
}
