import toursCollectionTypes from './tour.types';

const initialState = {
  tour: null,
};

const tourReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case toursCollectionTypes.LOAD_TOUR:
      return {
        ...state,
        tour: payload,
      };
    default:
      return state;
  }
};

export default tourReducer;
