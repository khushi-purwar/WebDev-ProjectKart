import { takeEvery, call, all, put } from "redux-saga/effects";

import { fetchMoviesAPI } from "api";

import { fetchDataFailure, fetchDataSuccess } from "./movies.actions";

import MoviesActionType from "./movies.types";

export function* fetchDataAsync({ url }) {
  try {
    const request = yield call(fetchMoviesAPI, url);

    yield put(fetchDataSuccess(request.data.results, url));
  } catch (error) {
    yield put(fetchDataFailure(error, url));
  }
}

export function* fetchDataStart() {
  yield takeEvery(MoviesActionType.FETCH_DATA_START, fetchDataAsync);
}

export function* moviesSaga() {
  yield all([call(fetchDataStart)]);
}
