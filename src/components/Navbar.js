import React from 'react';
import { Link } from 'react-router-dom';
// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export default function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Toolbar className="flex f-spaceBetween">
        <Button component={Link} color="inherit" to="/">
          {process.env.REACT_APP_SITE_TITLE}
        </Button>
        <Button component={Link} color="inherit" to="/fav">
          My Favorites
        </Button>
      </Toolbar>
    </AppBar>
  );
}
