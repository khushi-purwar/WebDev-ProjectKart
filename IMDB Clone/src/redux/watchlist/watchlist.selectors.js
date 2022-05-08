import { createSelector } from "reselect";

const selectWatchlist = (state) => state.watchlist;

export const selectWatchlistItems = createSelector(
  [selectWatchlist],
  (watchlist) => watchlist.watchlistItems
);
