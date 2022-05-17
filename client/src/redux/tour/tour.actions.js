import toursCollectionTypes from './tour.types';

export const setTour = (tour) => ({
  type: toursCollectionTypes.LOAD_TOUR,
  payload: tour,
});
