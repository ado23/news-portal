import { takeEvery, put, call } from "redux-saga/effects";

import { ERROR } from "containers/ErrorHandling/types";
import { GET_ARTICLES, GET_ARTICLES_SUCCESS } from "./types";
import { SHOW_LOADING, HIDE_LOADING } from "containers/Loader/types";

import Everything from "services/api/endpoints/Everything";

function* getEverything(action) {
  try {
    yield put({
      type: SHOW_LOADING,
      payload: "app/EverythingPage/getEverything"
    });

    const filters = action.payload;
    const response = yield call(Everything.getData, filters);

    const payload = {
      articles: response.articles,
      totalResults: response.totalResults,
      filters
    };

    yield put({ type: GET_ARTICLES_SUCCESS, payload });
  } catch (error) {
    yield put({ type: ERROR, error });
  } finally {
    yield put({
      type: HIDE_LOADING,
      payload: "app/EverythingPage/getEverything"
    });
  }
}

export function* watchGetEverything() {
  yield takeEvery(GET_ARTICLES, getEverything);
}
