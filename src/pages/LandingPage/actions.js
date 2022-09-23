import {
  GET_TOP_HEADLINES,
  RESET_ARTICLES_DATA,
  SET_FILTERS,
  RESET
} from "./types";

export function getTopHeadlines(payload) {
  return {
    type: GET_TOP_HEADLINES,
    payload
  };
}

export function resetArticlesData() {
  return {
    type: RESET_ARTICLES_DATA
  };
}

export function setFilters(payload) {
  return {
    type: SET_FILTERS,
    payload
  };
}

export function reset() {
  return {
    type: RESET
  };
}
