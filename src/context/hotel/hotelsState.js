import React, { useReducer } from 'react';
import hotelsContext from './hotelsContext';
import hotelsReducer from './hotelsReducer';
import { hotels } from '../../data';

import {
  SEARCH_HOTEL_SUCCESS,
  SEARCH_HOTEL_BY_ID,
  ADD_HOTEL,
  GET_HOTEL,
  DEL_HOTEL,
  SET_FILTER,
  SEARCH_HOTEL_ERROR,
} from '../types';

export default function HotelsState(props) {
  const initialState = {
    hotels,
    searchHotels: [],
    isError: false,
    favHotels: [],
    hotelById: [],
    filter: 25,
  };
  const [state, dispatch] = useReducer(hotelsReducer, initialState);

  const handleSearchHotels = (name, city) => {
    console.log(name, city);
    const cityList = state.hotels.filter(h => h.destinationName !== null);
    const search = cityList.filter(
      h =>
        h.name.toLowerCase().includes(name.toLowerCase()) &&
        h.destinationName.toLowerCase().includes(city.toLowerCase())
    );
    if (search.length)
      return dispatch({ type: SEARCH_HOTEL_SUCCESS, payload: search });

    dispatch({ type: SEARCH_HOTEL_ERROR });
  };

  const searchHotelById = id => {
    const searchById = state.hotels.filter(h => h.propertyCode === id);
    dispatch({ type: SEARCH_HOTEL_BY_ID, payload: searchById });
  };

  const addHotelToFav = hotel => {
    const searchById = state.hotels.filter(h => h.propertyCode === hotel);
    const newFav = state.favHotels.length
      ? [...state.favHotels, searchById[0]]
      : searchById;
    dispatch({ type: ADD_HOTEL, payload: newFav });
  };

  const getHotelFromFav = () => {
    const hotel = JSON.parse(localStorage.getItem('favHotels'));
    console.log(hotel);
    dispatch({ type: GET_HOTEL, payload: hotel });
  };

  const delHotelFromFav = hotel => {
    const newFav = state.favHotels.filter(h => h.propertyCode !== hotel);
    dispatch({ type: DEL_HOTEL, payload: newFav });
  };

  const setFilter = value => {
    console.log(value);
    dispatch({ type: SET_FILTER, payload: value });
  };

  const { children } = props;
  return (
    <hotelsContext.Provider
      value={{
        hotels: state.hotels,
        isError: state.isError,
        searchHotels: state.searchHotels,
        hotelById: state.hotelById,
        favHotels: state.favHotels,
        filter: state.filter,
        handleSearchHotels,
        searchHotelById,
        addHotelToFav,
        getHotelFromFav,
        delHotelFromFav,
        setFilter,
      }}
    >
      {children}
    </hotelsContext.Provider>
  );
}
