import { GET_ARTICLES, GET_TOP_HEADLINES } from "./types";

export function getArticles() {
  return {
    type: GET_ARTICLES
  };
}

export function getTopHeadlines(payload) {
  return {
    type: GET_TOP_HEADLINES,
    payload
  };
}
