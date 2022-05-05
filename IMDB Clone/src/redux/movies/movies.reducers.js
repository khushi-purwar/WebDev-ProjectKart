import MoviesActionType from "./movies.types";

const INITIAL_STATE = {
  nowPlayingCollections: null,
  featuredTodayCollections: null,
  fanFavoritesCollections: null,
  isFetching: false,
  errorMessage: undefined,
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesActionType.FETCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };

    case MoviesActionType.FETCH_DATA_SUCCESS:
      if (action.url.includes("/now_playing")) {
        state.nowPlayingCollections = action.payload;
      }
      if (action.url.includes("/trending")) {
        state.featuredTodayCollections = action.payload;
      }
      if (action.url.includes("/popular")) {
        state.fanFavoritesCollections = action.payload;
      }
      return {
        ...state,
        isFetching: false,
        nowPlayingCollections: state.nowPlayingCollections,
        featuredTodayCollections: state.featuredTodayCollections,
        fanFavoritesCollections: state.fanFavoritesCollections,
      };

    case MoviesActionType.FETCH_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
