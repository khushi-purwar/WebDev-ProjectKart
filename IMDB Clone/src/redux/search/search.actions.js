import SearchActionType from "./search.types";

export const searchInput = (input) => ({
  type: SearchActionType.SEARCH_INPUT,
  payload: input,
});

export const fetchSearchMovieStart = () => ({
  type: SearchActionType.FETCH_SEARCH_MOVIE_START,
});

export const fetchSearchMovieSuccess = (payload) => ({
  type: SearchActionType.FETCH_SEARCH_MOVIE_SUCCESS,
  payload,
});

export const fetchSearchMovieFailure = (error) => ({
  type: SearchActionType.FETCH_SEARCH_MOVIE_FAILURE,
  payload: error,
});

export const clearSearchEntry = () => ({
  type: SearchActionType.CLEAR_SEARCH_ENTRY,
});

export const clearSearchCollections = () => ({
  type: SearchActionType.CLEAR_SEARCH_COLLECTIONS,
});

export const expandSearchInput = (payload) => ({
  type: SearchActionType.EXPAND_SEARCH_INPUT,
  payload,
});
