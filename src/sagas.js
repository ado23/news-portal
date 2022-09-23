import { all } from "redux-saga/effects";

import * as landingPageSaga from "pages/LandingPage/sagas";
import * as everythingPageSaga from "pages/EverythingPage/sagas";
import * as errorHandlingSaga from "./containers/ErrorHandling/sagas";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    landingPageSaga.watchGetTopHeadlines(),
    everythingPageSaga.watchGetEverything(),
    // Errors saga - handling all app erros on one place
    errorHandlingSaga.watchErrorHandling()
  ]);
}
