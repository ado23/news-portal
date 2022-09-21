import { takeEvery, put, call } from "redux-saga/effects";

import { GET_TOP_HEADLINES, GET_TOP_HEADLINES_SUCCESS } from "./types";
import { SHOW_LOADING, HIDE_LOADING } from "containers/Loader/types";

import TopHeadlines from "services/api/endpoints/TopHeadlines";

function* getTopHeadlines(action) {
  try {
    yield put({
      type: SHOW_LOADING,
      payload: "app/LandingPage/getTopHeadlines"
    });

    const { filter } = action.payload;
    const response = yield call(TopHeadlines.getData, filter);

    yield put({ type: GET_TOP_HEADLINES_SUCCESS, payload: response.articles });
  } catch (error) {
    let catchedError = yield error.json();
    console.log("catchedError", catchedError);

    // yield put({ type: SHOW_ERROR, payload: catchedError });
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
