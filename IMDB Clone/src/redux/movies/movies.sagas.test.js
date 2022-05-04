import * as api from "api";
import * as actions from "./movies.actions";
import MoviesActionType from "./movies.types";
import { expectSaga, testSaga, matchers } from "redux-saga-test-plan";
import { fetchDataAsync, fetchDataStart } from "./movies.sagas";

describe("Movies Sagas", () => {
  let url = "/movie/now_playing";
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

  it("should run fetchDataAsync on FETCH_DATA_START action", () => {
    testSaga(fetchDataStart)
      .next()
      .takeEvery(MoviesActionType.FETCH_DATA_START, fetchDataAsync);
  });

  it("should fetch data successfully on fetchDataAsync", () => {
    jest.spyOn(api, "fetchMoviesAPI").mockImplementation(() => request);

    return expectSaga(fetchDataAsync, { url })
      .provide([matchers.call.fn(api.fetchMoviesAPI), request])
      .put(actions.fetchDataSuccess(request.data.results, url))
      .run();
  });

  it("handles error", () => {
    const error = new Error("this is error");
    jest.spyOn(api, "fetchMoviesAPI").mockImplementation(() => {
      throw error;
    });

    return expectSaga(fetchDataAsync, { url })
      .provide([matchers.call.fn(api.fetchMoviesAPI), error])
      .put(actions.fetchDataFailure(error, url))
      .run();
  });
});
