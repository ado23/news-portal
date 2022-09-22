import { combineReducers } from "redux";

import LoaderReducer from "containers/Loader/reducers";
import ArticlesReducer from "pages/LandingPage/reducers";
import ArticleDetailsReducer from "pages/Article/reducers";

const appReducer = combineReducers({
  articles: ArticlesReducer,
  loader: LoaderReducer,
  articleDetails: ArticleDetailsReducer
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
