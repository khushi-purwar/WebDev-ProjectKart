import WatchlistActionTypes from "./watchlist.types";
import { addItem, removeItem } from "./watchlist.utils";

const INITIAL_STATE = {
  watchlistItems: [],
};

const watchlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WatchlistActionTypes.ADD_ITEM_TO_WATCHLIST:
      return {
        ...state,
        watchlistItems: addItem(state.watchlistItems, action.item),
      };

    case WatchlistActionTypes.REMOVE_ITEM_FROM_WATCHLIST:
      return {
        ...state,
        watchlistItems: removeItem(state.watchlistItems, action.item),
      };

    case WatchlistActionTypes.REMOVE_ALL_ITEMS_FROM_WATCHLIST:
      return {
        ...state,
        watchlistItems: [],
      };

    case WatchlistActionTypes.GET_USER_WATCHLIST_ITEMS:
      return {
        ...state,
        watchlistItems: action.payload,
      };

    default:
      return state;
  }
};

export default watchlistReducer;
