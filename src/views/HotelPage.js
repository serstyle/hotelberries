/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react';
import { Helmet } from 'react-helmet';

// Material Ui
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// components
import CustomMap from '../components/CustomMap';
import CardHotelInfo from '../components/CardHotelInfo';
// context
import hotelsContext from '../context/hotel/hotelsContext';

export default function HotelPage(props) {
  const [data, getData] = useState(false);
  const HotelsContext = useContext(hotelsContext);
  const {
    setFilter,
    hotelById,
    searchHotelById,
    getHotelFromFav,
    filter,
  } = HotelsContext;
  useEffect(() => {
    setFilter(10000);
    searchHotelById(props.match.params.id);
    getData(true);
    getHotelFromFav();
  }, []);
  const address =
    data &&
    `${hotelById[0].address.streetAddress} ${hotelById[0].address.city} ${hotelById[0].address.postalCode}, ${hotelById[0].address.country}`;
  return (
    data && (
      <Container className="container">
        <Helmet>
          <title>
            {hotelById[0].brandName} | {process.env.REACT_APP_SITE_TITLE}
          </title>
        </Helmet>
        <div>
          <Grid container>
            <Grid item xs={12}>
              <CardHotelInfo
                hotelName={hotelById[0].name}
                brandName={hotelById[0].brandName}
                email={
                  hotelById[0].contactDetails.frontDeskEmailId
                    ? hotelById[0].contactDetails.frontDeskEmailId
                    : 'No email'
                }
                phone={hotelById[0].contactDetails.phoneNumber}
                address={address}
                propertyCode={hotelById[0].propertyCode}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomMap hotelById={hotelById} height="35" filter={filter} />
            </Grid>
          </Grid>
        </div>
      </Container>
    )
  );
}
