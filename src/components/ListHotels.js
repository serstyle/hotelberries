import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardHotels from './CardHotels';

export default function ListHotels({ hotels }) {
  const CardList = hotels.map((h, i) => (
    <Grid key={i} item xs={12} md={6} lg={4}>
      <CardHotels
        hotelName={h.name}
        brandName={h.brandName}
        city={h.address.city}
        country={h.address.country}
        propertyCode={h.propertyCode}
      />
    </Grid>
  ));
  return (
    <Grid container spacing={3} alignItems="stretch" justify="flex-start">
      {CardList}
    </Grid>
  );
}
