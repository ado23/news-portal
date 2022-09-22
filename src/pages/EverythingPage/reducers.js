import { GET_ARTICLES_SUCCESS, RESET_ARTICLES_DATA, RESET } from "./types";

const INITIAL_FILTERS = {
  filters: {
    q: null,
    pageSize: 20,
    page: 1,
    sortBy: "publishedAt"
  }
};

const INITIAL_STATE = {
  articles: [],
  totalResults: 0,
  ...INITIAL_FILTERS
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, ...action.payload.articles],
        totalResults: action.payload.totalResults,
        filters: { ...state.filters, ...action.payload.filters }
      };

    case RESET_ARTICLES_DATA:
      return { ...state, articles: [], totalResults: [] };

    case RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
}
