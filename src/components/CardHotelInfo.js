import React, { useContext } from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Typography from '@material-ui/core/Typography';
// context
import hotelsContext from '../context/hotel/hotelsContext';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    position: 'relative',
  },
  cardContent: {
    paddingRight: '48px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  favButton: {
    position: 'absolute',
    top: '5px',
    right: 0,
    padding: 0,
    minWidth: '48px',
  },
});

export default function SimpleCard(props) {
  const HotelsContext = useContext(hotelsContext);
  const classes = useStyles();
  const { hotelName, brandName, address, phone, email, propertyCode } = props;
  const isFav = HotelsContext.favHotels.filter(
    h => h.propertyCode === propertyCode
  );
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h4" component="h2">
          {hotelName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {brandName}
        </Typography>
        <Typography variant="h6" component="h2">
          Contact:
        </Typography>
        <Typography variant="body2" component="p">
          Phone Number: {phone}
        </Typography>
        <Typography variant="body2" component="p">
          Email: {email}
        </Typography>
        <Typography variant="body2" component="p">
          {address}
        </Typography>
        {!isFav.length ? (
          <Button
            className={classes.favButton}
            onClick={() => HotelsContext.addHotelToFav(propertyCode)}
            size="small"
          >
            <FavoriteBorder />
          </Button>
        ) : (
          <Button
            className={classes.favButton}
            onClick={() => HotelsContext.delHotelFromFav(propertyCode)}
            size="small"
          >
            <Favorite />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
