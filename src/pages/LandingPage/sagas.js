import { takeEvery, put, call } from "redux-saga/effects";

import { ERROR } from "containers/ErrorHandling/types";
import { GET_TOP_HEADLINES, GET_TOP_HEADLINES_SUCCESS } from "./types";
import { SHOW_LOADING, HIDE_LOADING } from "containers/Loader/types";

import TopHeadlines from "services/api/endpoints/TopHeadlines";

function* getTopHeadlines(action) {
  try {
    yield put({
      type: SHOW_LOADING,
      payload: "app/LandingPage/getTopHeadlines"
    });

    const filters = action.payload;
    const response = yield call(TopHeadlines.getData, filters);

    const payload = {
      articles: response.articles,
      totalResults: response.totalResults,
      filters
    };

    yield put({ type: GET_TOP_HEADLINES_SUCCESS, payload });
  } catch (error) {
    yield put({ type: ERROR, error });
  } finally {
    yield put({
      type: HIDE_LOADING,
      payload: "app/LandingPage/getTopHeadlines"
    });
  }
}

export function* watchGetTopHeadlines() {
  yield takeEvery(GET_TOP_HEADLINES, getTopHeadlines);
}
