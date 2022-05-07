import searchCollectionTypes from './search.types';

const initialState = {
  searchedItems: [],
  isLoading: false,
  errMessage: undefined,
};

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case searchCollectionTypes.START_SEARCH_ITEMS:
      return { ...state, isLoading: true };
    case searchCollectionTypes.SUCCESS_SEARCH_ITEMS:
      return {
        ...state,
        isLoading: false,
        searchedItems: payload,
      };
    case searchCollectionTypes.FAIL_SEARCH_ITEMS:
      return {
        ...state,
        isLoading: false,
        errMessage: payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
