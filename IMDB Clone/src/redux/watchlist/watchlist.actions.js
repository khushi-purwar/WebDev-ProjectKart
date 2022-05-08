import WatchlistActionTypes from "./watchlist.types";

export const addItemToWatchlist = (item) => ({
  type: WatchlistActionTypes.ADD_ITEM_TO_WATCHLIST,
  item,
});

export const removeItemFromWatchlist = (item) => ({
  type: WatchlistActionTypes.REMOVE_ITEM_FROM_WATCHLIST,
  item,
});

export const removeAllItemsFromWatchlist = () => ({
  type: WatchlistActionTypes.REMOVE_ALL_ITEMS_FROM_WATCHLIST,
});

export const getUserWatchlistItems = (watchlistItems) => ({
  type: WatchlistActionTypes.GET_USER_WATCHLIST_ITEMS,
  payload: watchlistItems,
});
