import { expectSaga, matchers, testSaga } from "redux-saga-test-plan";
import {
  fetchSearchMovieAsync,
  searchMovies,
  cancelTask,
  fetchSearchMovieStart,
} from "./search.sagas";
import * as api from "api";
import {
  fetchSearchMovieSuccess,
  fetchSearchMovieFailure,
} from "./search.actions";
import { select } from "redux-saga/effects";
import { selectSearchInput } from "./search.selectors";

import * as searchSagas from "./search.sagas";

import { createMockTask } from "@redux-saga/testing-utils";
import SearchActionType from "./search.types";

describe("Search Sagas", () => {
  let url = "/search/movie";
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

  let payload = {
    request: {
      data: {
        results: movies,
      },
    },
  };

  let request = {
    data: {
      results: movies,
    },
  };

  describe("searchMovies", () => {
    jest.spyOn(api, "fetchSearchMoviesAPI").mockImplementation(() => request);

    let input = "the";

    it("should search for movies", () => {
      return expectSaga(searchMovies, input)
        .provide([matchers.call.fn(api.fetchSearchMoviesAPI), request])
        .put(fetchSearchMovieSuccess(request.data.results))
        .run();
    });

    it("should handle error", () => {
      let error = new Error("error");
      jest.spyOn(api, "fetchSearchMoviesAPI").mockImplementation(() => {
        throw error;
      });
      return expectSaga(searchMovies, input)
        .provide([matchers.call.fn(api.fetchSearchMoviesAPI), error])
        .put(fetchSearchMovieFailure(error))
        .run();
    });
  });

  describe("fetchSearchMovieAsync", () => {
    let state = {
      search: {
        searchInput: "the",
      },
    };

    let searchInput = state.search.searchInput;
    let task = createMockTask();
    let type = "CLEAR_SEARCH_COLLECTIONS";

    it("should call searchMovies and cancelTask", () => {
      testSaga(fetchSearchMovieAsync)
        .next()
        .select(selectSearchInput)
        .next(searchInput)
        .fork(searchMovies, searchInput)
        .next(task)
        .call(cancelTask, task, type)
        .next()
        .isDone();
    });

    it("should cancel task on CLEAR_SEARCH_COLLECTIONS", () => {
      let action = {
        type,
      };

      testSaga(cancelTask, task, type)
        .next()
        .take([type])
        .next(action)
        .cancel(task)
        .next()
        .isDone();
    });

    it("should not cancel task when CLEAR_SEARCH_COLLECTIONS is not triggered", () => {
      type = "OTHER";

      testSaga(cancelTask, task, type).next().take([type]).next().isDone();
    });
  });

  describe("fetchSearchMovieStart", () => {
    it("should call fetchSearchMovieAsync", () => {
      testSaga(fetchSearchMovieStart)
        .next()
        .takeLatest(
          SearchActionType.FETCH_SEARCH_MOVIE_START,
          fetchSearchMovieAsync
        )
        .finish()
        .isDone();
    });
  });
});
