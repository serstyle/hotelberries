/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginTop: 0,
    flexBasis: 'auto',
    background: 'white',
    borderRadius: '0',
  },
  button: {
    margin: theme.spacing(1),
  },
  iconButton: {
    padding: 10,
  },
}));

export default function Searchform(props) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const classes = useStyles();
  const handleSubmit = e => {
    e.preventDefault();
    if (name.length || city.length) {
      props.submit(name, city);
      setName('');
      setCity('');
    }
  };
  return (
    <div className="container sub-container text-center">
      <div className="flex f-center">
        <form onSubmit={handleSubmit}>
          <TextField
            id="SearchByName"
            label="Search By Hotel Name"
            placeholder="e.g : Quality"
            className={classes.textField}
            value={name}
            onChange={e => setName(e.target.value)}
            margin="normal"
            variant="outlined"
          />
        </form>
        <form onSubmit={handleSubmit}>
          <TextField
            id="searchByCity"
            label="Search By City"
            placeholder="e.g : Stockholm"
            className={classes.textField}
            value={city}
            onChange={e => setCity(e.target.value)}
            margin="normal"
            variant="outlined"
          />
        </form>
      </div>
      <Button
        onClick={handleSubmit}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        Search
      </Button>
    </div>
  );
}
