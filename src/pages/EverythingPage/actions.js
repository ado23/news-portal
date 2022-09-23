import { GET_ARTICLES, RESET_ARTICLES_DATA, SET_FILTERS, RESET } from "./types";

export function getArticles(payload) {
  console.log("payload: ", payload);
  return {
    type: GET_ARTICLES,
    payload
  };
}

export function setFilters(payload) {
  return {
    type: SET_FILTERS,
    payload
  };
}

export function resetArticlesData() {
  return {
    type: RESET_ARTICLES_DATA
  };
}

export function reset() {
  return {
    type: RESET
  };
}
