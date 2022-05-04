import MoviesActionType from "./movies.types";

export const fetchDataStart = (payload) => ({
  type: MoviesActionType.FETCH_DATA_START,
  url: payload,
});

export const fetchDataSuccess = (payload, url) => ({
  type: MoviesActionType.FETCH_DATA_SUCCESS,
  payload,
  url,
});

export const fetchDataFailure = (error, url) => ({
  type: MoviesActionType.FETCH_DATA_FAILURE,
  payload: error,
  url,
});