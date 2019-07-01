import {
  SEARCH_HOTEL_SUCCESS,
  SEARCH_HOTEL_BY_ID,
  ADD_HOTEL,
  GET_HOTEL,
  DEL_HOTEL,
  SET_FILTER,
  SEARCH_HOTEL_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_HOTEL_SUCCESS:
      return { ...state, searchHotels: action.payload, isError: false };
    case SEARCH_HOTEL_ERROR:
      return { ...state, isError: true };
    case SEARCH_HOTEL_BY_ID:
      return { ...state, hotelById: action.payload };
    case DEL_HOTEL:
    case ADD_HOTEL:
      localStorage.setItem('favHotels', JSON.stringify(action.payload));
      return { ...state, favHotels: action.payload };
    case GET_HOTEL:
      return { ...state, favHotels: action.payload ? action.payload : [] };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
