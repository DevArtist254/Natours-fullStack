import studioCollectionTypes from './studio.types';

const initialState = {
  tourDecription: null,
  startLocation: null,
  locations: [],
};

const studioReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case studioCollectionTypes.SET_TOUR_DECRIPTION:
      return { ...state, tourDecription: payload };
    case studioCollectionTypes.SET_START_LOCATION:
      return { ...state, startLocation: payload };
    case studioCollectionTypes.SET_LOCATION:
      return { ...state, locations: [...state.locations, payload] };
    default:
      return state;
  }
};

export default studioReducer;
