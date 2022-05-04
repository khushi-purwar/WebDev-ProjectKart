import * as actions from "./search.actions";
import searchReducers from "./search.reducers";

describe("Search Reducers", () => {
  let INITIAL_STATE = {
    searchInput: "",
    collections: null,
    isFetching: false,
    expandSearchInput: false,
  };

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

  describe("SEARCH_INPUT", () => {
    it("should enter data into search input", () => {
      expect(
        searchReducers(INITIAL_STATE, actions.searchInput("the")).searchInput
      ).toEqual("the");
    });
  });

  describe("FETCH_SEARCH_MOVIE_START", () => {
    it("should turn isFetching to true", () => {
      expect(
        searchReducers(INITIAL_STATE, actions.fetchSearchMovieStart())
          .isFetching
      ).toEqual(true);
    });
  });

  describe("FETCH_SEARCH_MOVIE_SUCCESS", () => {
    it("should update collecions after success", () => {
      expect(
        searchReducers(INITIAL_STATE, actions.fetchSearchMovieSuccess(movies))
          .collections
      ).toEqual(movies);
    });
    it("should turn isFetching to false", () => {
      expect(
        searchReducers(INITIAL_STATE, actions.fetchSearchMovieSuccess(movies))
          .isFetching
      ).toEqual(false);
    });
  });

  describe("FETCH_SEARCH_MOVIE_FAILURE", () => {
    it("should throw error", () => {
      expect(
        searchReducers(INITIAL_STATE, actions.fetchSearchMovieFailure("error"))
          .errorMessage
      ).toEqual("error");
    });
    it("should turn isFetching to false", () => {
      expect(
        searchReducers(INITIAL_STATE, actions.fetchSearchMovieFailure("error"))
          .isFetching
      ).toEqual(false);
    });
  });

  describe("CLEAR_SEARCH_ENTRY", () => {
    let newState = { ...INITIAL_STATE };
    newState.searchInput = "test";
    it("should clear searchInput", () => {
      expect(
        searchReducers(newState, actions.clearSearchEntry()).searchInput
      ).toEqual(null);
    });
  });

  describe("CLEAR_SEARCH_COLLECTIONS", () => {
    let newState = { ...INITIAL_STATE };
    newState.collections = movies;
    it("should clear collections", () => {
      expect(
        searchReducers(newState, actions.clearSearchCollections()).collections
      ).toEqual(null);
    });
  });

  describe("EXPAND_SEARCH_INPUT", () => {
    it("should turn true", () => {
      expect(
        searchReducers(INITIAL_STATE, actions.expandSearchInput(true))
          .expandSearchInput
      ).toEqual(true);
    });
  });
});
