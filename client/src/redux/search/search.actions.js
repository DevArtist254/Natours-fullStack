import searchCollectionTypes from './search.types';
import axios from 'axios';

export const fetchCollectionStart = () => ({
  type: searchCollectionTypes.START_SEARCH_ITEMS,
});

export const fetchCollectionSuccess = (tour) => ({
  type: searchCollectionTypes.SUCCESS_SEARCH_ITEMS,
  payload: tour,
});

export const fetchCollectionFail = (errMessage) => ({
  type: searchCollectionTypes.FAIL_SEARCH_ITEMS,
  payload: errMessage,
});

export const loadSearchItems = (value, name) => {
  return async (dispatch) => {
    try {
      if (name === 'tourName') {
        const res = await axios({
          method: 'GET',
          url: `http://localhost:2540/natours/v1/tours?name=${value}`,
        });

        fetchCollectionStart();
        dispatch(fetchCollectionSuccess(res.data.data.doc));
      } else if (name === 'priceGte') {
        const res = await axios({
          method: 'GET',
          url: `http://localhost:2540/natours/v1/tours?price[gte]=${value}`,
        });

        fetchCollectionStart();
        dispatch(fetchCollectionSuccess(res.data.data.doc));
      } else if (name === 'durationGte') {
        const res = await axios({
          method: 'GET',
          url: `http://localhost:2540/natours/v1/tours?duration[gte]=${value}`,
        });

        fetchCollectionStart();
        dispatch(fetchCollectionSuccess(res.data.data.doc));
      } else if (name === 'difficulty') {
        const res = await axios({
          method: 'GET',
          url: `http://localhost:2540/natours/v1/tours?difficulty=${value}`,
        });

        fetchCollectionStart();
        dispatch(fetchCollectionSuccess(res.data.data.doc));
      }
    } catch (error) {
      dispatch(fetchCollectionFail(error.message));
    }
  };
};
