import { combineReducers } from "redux";

import ArticlesReducer from "pages/LandingPage/reducers";

const appReducer = combineReducers({
  articles: ArticlesReducer
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
