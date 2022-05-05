import * as actions from "./movies.actions";
import moviesReducer from "./movies.reducers";

const INITIAL_STATE = {
  nowPlayingCollections: null,
  featuredTodayCollections: null,
  fanFavoritesCollections: null,
  isFetching: false,
  errorMessage: undefined,
};

describe("Movies Reducers", () => {
  let url = "https://test.com";
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

  describe("FETCH_DATA_START", () => {
    it("should turn isFetching to true on FETCH_DATA_START", () => {
      expect(
        moviesReducer(INITIAL_STATE, actions.fetchDataStart(url)).isFetching
      ).toEqual(true);
    });
  });

  describe("FETCH_DATA_SUCCESS", () => {
    it("should fetch data successfully for now_playing movies", () => {
      url = "https://movies/now_playing/watch";

      expect(
        moviesReducer(INITIAL_STATE, actions.fetchDataSuccess(movies, url))
          .nowPlayingCollections
      ).toEqual(movies);
    });
    it("should fetch data successfully for popular movies", () => {
      url = "https://movies/popular/watch";

      expect(
        moviesReducer(INITIAL_STATE, actions.fetchDataSuccess(movies, url))
          .fanFavoritesCollections
      ).toEqual(movies);
    });
    it("should fetch data successfully for trending movies", () => {
      url = "https://movies/trending/watch";

      expect(
        moviesReducer(INITIAL_STATE, actions.fetchDataSuccess(movies, url))
          .featuredTodayCollections
      ).toEqual(movies);
    });

    it("should turn isFetching to false", () => {
      expect(
        moviesReducer(INITIAL_STATE, actions.fetchDataSuccess(movies, url))
          .isFetching
      ).toEqual(false);
    });
  });

  describe("FETCH_DATA_FAILURE", () => {
    it("should throw error on FETCH_DATA_FAILURE", () => {
      expect(
        moviesReducer(INITIAL_STATE, actions.fetchDataFailure("error"))
          .errorMessage
      ).toEqual("error");
    });
  });
});
