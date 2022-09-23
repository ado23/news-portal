import {
  GET_TOP_HEADLINES_SUCCESS,
  RESET_ARTICLES_DATA,
  SET_FILTERS,
  RESET
} from "./types";

const INITIAL_FILTERS = {
  filters: {
    country: "us",
    category: null,
    q: null,
    pageSize: 20,
    page: 1
  }
};

const INITIAL_STATE = {
  articles: [],
  totalResults: 0,
  ...INITIAL_FILTERS
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TOP_HEADLINES_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, ...action.payload.articles],
        totalResults: action.payload.totalResults,
        filters: { ...state.filters, ...action.payload.filters }
      };

    case SET_FILTERS:
      return { ...state, filters: { ...state.filters, ...action.payload } };

    case RESET_ARTICLES_DATA:
      return { ...state, articles: [], totalResults: [] };

    case RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
}
