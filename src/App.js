import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// views
import Home from './views/Home';
import SearchPage from './views/SearchPage';
import HotelPage from './views/HotelPage';
import FavHotels from './views/FavHotels';
// components
import Navbar from './components/Navbar';
// context
import HotelsState from './context/hotel/hotelsState';

import './assets/styles/App.css';

function App() {
  return (
    <HotelsState>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/hotel/:id" component={HotelPage} />
          <Route exact path="/fav" component={FavHotels} />
        </div>
      </Router>
    </HotelsState>
  );
}

export default App;
