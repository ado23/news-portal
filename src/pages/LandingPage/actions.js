import { GET_TOP_HEADLINES, RESET_ARTICLES_DATA, RESET } from "./types";

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

export function reset() {
  return {
    type: RESET
  };
}
