import { createSelector } from "reselect";

const selectMovies = (state) => state.movies;

export const selectNowPlayingCollections = createSelector(
  [selectMovies],
  (movies) => movies.nowPlayingCollections
);

export const selectFeaturedTodayCollections = createSelector(
  [selectMovies],
  (movies) => movies.featuredTodayCollections
);

export const selectFanFavoritesCollections = createSelector(
  [selectMovies],
  (movies) => movies.fanFavoritesCollections
);

export const selectIsCollectionFetching = createSelector(
  [selectMovies],
  (movies) => movies.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectMovies],
  (movies) => !!movies.collections
);
