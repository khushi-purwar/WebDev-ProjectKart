import watchlistReducer from "./watchlist.reducers";
import * as actions from "./watchlist.actions";

describe("Watchlist Reducers", () => {
  const INITIAL_STATE = {
    watchlistItems: [],
  };

  let item = {
    id: 1,
    title: "Raging Bull",
  };

  let item2 = {
    id: 2,
    title: "Forrest Gump",
  };

  let newState = JSON.parse(JSON.stringify(INITIAL_STATE));
  newState.watchlistItems.push(item, item2);

  it("should add item on ADD_ITEM_TO_WATCHLIST", () => {
    expect(
      watchlistReducer(INITIAL_STATE, actions.addItemToWatchlist(item))
        .watchlistItems
    ).toEqual([item]);
  });

  it("should remove item on REMOVE_ITEM_FROM_WATCHLIST", () => {
    expect(
      watchlistReducer(newState, actions.removeItemFromWatchlist(item))
        .watchlistItems
    ).toEqual([item2]);
  });

  it("should remove all items on REMOVE_ALL_ITEMS_FROM_WATCHLIST", () => {
    expect(
      watchlistReducer(newState, actions.removeAllItemsFromWatchlist())
        .watchlistItems
    ).toEqual([]);
  });

  it("should get watchlistItems on GET_USER_WATCHLIST_ITEMS", () => {
    expect(
      watchlistReducer(
        newState,
        actions.getUserWatchlistItems(newState.watchlistItems)
      ).watchlistItems
    ).toEqual(newState.watchlistItems);
  });
});
