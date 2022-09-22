import { GET_ARTICLES, RESET_ARTICLES_DATA, RESET } from "./types";

export function getArticles(payload) {
  return {
    type: GET_ARTICLES,
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
