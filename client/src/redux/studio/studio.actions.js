import studioCollectionTypes from './studio.types';

export const setDescription = (description) => ({
  type: studioCollectionTypes.SET_TOUR_DECRIPTION,
  payload: description,
});

export const setStartLocation = (location) => ({
  type: studioCollectionTypes.SET_START_LOCATION,
  payload: location,
});

export const setLocation = (location) => ({
  type: studioCollectionTypes.SET_LOCATION,
  payload: location,
});
