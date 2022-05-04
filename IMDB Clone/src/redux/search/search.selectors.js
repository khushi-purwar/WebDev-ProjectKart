import { createSelector } from "reselect";

const selectSearch = (state) => state.search;

export const selectSearchInput = createSelector(
  [selectSearch],
  (search) => search.searchInput
);

export const selectMoviesCollection = createSelector(
  [selectSearch],
  (search) => search.collections
);

export const selectIsCollectionFetching = createSelector(
  [selectSearch],
  (search) => search.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectSearch],
  (search) => !!search.collections
);

export const selectIsSearchExpanded = createSelector(
  [selectSearch],
  (search) => search.expandSearchInput
);
