import * as actions from "./watchlist.actions";
import { expectSaga, testSaga, matchers } from "redux-saga-test-plan";
import {
  updateWatchlistInFirebase,
  getWatchlistItemsFromFirebase,
  onSignInGetWatchlistItems,
  onWatchlistUpdate,
} from "./watchlist.sagas";
import { selectCurrentUser, selectUser } from "redux/user/user.selectors";
import { selectWatchlistItems } from "./watchlist.selectors";
import * as firebase from "firebase/firebase.utils";
import { select } from "redux-saga/effects";
import { UserActionTypes } from "redux/user/user.types";
import WatchlistActionTypes from "./watchlist.types";

describe("Watchlist Sagas", () => {
  let movies = [
    {
      id: 1,
      title: "The Godfather",
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
    },
  ];
  let watchlist = movies;
  let watchlistSnapshot = {
    data: () => {
      return { watchlist };
    },
  };
  let currentUser = { id: 1 };
  let watchlistRef = {
    update: jest.fn(),
    get: () => watchlistSnapshot,
  };

  let state = {
    user: {
      currentUser,
    },
    watchlist: {
      watchlistItems: movies,
    },
  };
  describe("updateWatchlistInFirebase", () => {
    jest
      .spyOn(firebase, "getUserWatchlistRef")
      .mockImplementation(() => watchlistRef);

    it("should update watchlist", () => {
      return expectSaga(updateWatchlistInFirebase)
        .withState(state)
        .provide([
          [select(selectCurrentUser), currentUser],
          [select(selectWatchlistItems), watchlist],
        ])
        .call(firebase.getUserWatchlistRef, currentUser.id)
        .returns(watchlistRef.update({ watchlist }))
        .run();
    });
  });

  describe("getWatchlistItemsFromFirebase", () => {
    it("should get watchlist items", () => {
      return expectSaga(getWatchlistItemsFromFirebase)
        .withState(state)
        .provide([select(selectCurrentUser), currentUser])
        .call(firebase.getUserWatchlistRef, currentUser.id)
        .put(actions.getUserWatchlistItems(watchlistSnapshot.data().watchlist))
        .run();
    });
  });

  describe("onSignInGetWatchlistItems", () => {
    it("should sign in and get watch list items ", () => {
      testSaga(onSignInGetWatchlistItems)
        .next()
        .takeLatest(
          UserActionTypes.SIGN_IN_SUCCESS,
          getWatchlistItemsFromFirebase
        );
    });
  });

  describe("onWatchlistUpdate", () => {
    it("should update watchlist when adding or removing item", () => {
      testSaga(onWatchlistUpdate)
        .next()
        .takeLatest(
          [
            WatchlistActionTypes.ADD_ITEM_TO_WATCHLIST,
            WatchlistActionTypes.REMOVE_ITEM_FROM_WATCHLIST,
          ],
          updateWatchlistInFirebase
        );
    });
  });
});
