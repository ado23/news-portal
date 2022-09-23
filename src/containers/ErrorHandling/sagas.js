import { takeLatest } from "redux-saga/effects";
import { ERROR } from "./types";

/** Saga for login **/
function* errorHandling(action) {
  try {
    yield console.error("Error calling endpoint:");
    yield console.log(action.error);
  } catch (error) {
    console.log("Error: ", error);
  }
}

export function* watchErrorHandling() {
  yield takeLatest(ERROR, errorHandling);
}
