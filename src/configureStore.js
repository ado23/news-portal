import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import rootReducer from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware({
    onError(error) {
      console.log("Saga ERROR createSagaMiddleware");
      console.log(error);
    }
  });

  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
}
