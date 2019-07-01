import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
// Material UI
import Container from '@material-ui/core/Container';
// context
import hotelsContext from '../context/hotel/hotelsContext';

// components
import Searchform from '../components/Searchform';
import HotelsAround from '../components/HotelsAround';
import CustomSelect from '../components/CustomSelect';

export default function Home(props) {
  const HotelsContext = useContext(hotelsContext);
  const { setFilter, handleSearchHotels, filter } = HotelsContext;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setFilter(25), []);
  const handleSearch = (name, city) => {
    handleSearchHotels(name, city);
    props.history.push('/search');
  };
  const handleFilter = event => setFilter(event.target.value);
  return (
    <div>
      <Helmet>
        <title>Home | {process.env.REACT_APP_SITE_TITLE}</title>
      </Helmet>
      <Container className="container main-container">
        <h1>Find hotels by names and/or locations</h1>
        <Searchform className="sub-container" submit={handleSearch} />
      </Container>
      <Container className="container">
        <div className="flex f-spaceBetween">
          <h1>Or find hotels around at {filter < 501 && filter} km from you</h1>
          <CustomSelect value={filter} handleChange={handleFilter} />
        </div>
        <HotelsAround />
      </Container>
    </div>
  );
}
