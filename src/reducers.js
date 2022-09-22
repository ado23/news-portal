import { combineReducers } from "redux";

import LoaderReducer from "containers/Loader/reducers";
import ArticlesTopHeadlinesReducer from "pages/LandingPage/reducers";
import ArticleDetailsReducer from "pages/Article/reducers";
import ArticlesEverythingReducer from "pages/EverythingPage/reducers";

const appReducer = combineReducers({
  articles: ArticlesTopHeadlinesReducer,
  loader: LoaderReducer,
  articleDetails: ArticleDetailsReducer,
  articlesEverything: ArticlesEverythingReducer
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
