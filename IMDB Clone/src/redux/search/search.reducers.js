import SearchActionType from "./search.types";

const INITIAL_STATE = {
  searchInput: "",
  collections: null,
  isFetching: false,
  expandSearchInput: false,
};

const searchReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionType.SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };
    case SearchActionType.FETCH_SEARCH_MOVIE_START:
      return {
        ...state,
        isFetching: true,
      };

    case SearchActionType.FETCH_SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };

    case SearchActionType.FETCH_SEARCH_MOVIE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    case SearchActionType.CLEAR_SEARCH_ENTRY:
      return {
        ...state,
        searchInput: null,
        isFetching: false,
        errorMessage: action.payload,
      };
    case SearchActionType.CLEAR_SEARCH_COLLECTIONS:
      return {
        ...state,
        collections: null,
        isFetching: false,
        errorMessage: action.payload,
      };

    case SearchActionType.EXPAND_SEARCH_INPUT:
      return {
        ...state,
        expandSearchInput: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducers;
