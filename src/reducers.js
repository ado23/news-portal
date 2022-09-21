import { combineReducers } from "redux";

import ArticlesReducer from "pages/LandingPage/reducers";
import LoaderReducer from "containers/Loader/reducers";

const appReducer = combineReducers({
  articles: ArticlesReducer,
  loader: LoaderReducer
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
