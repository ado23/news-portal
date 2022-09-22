import { SET_ARTICLE, RESET } from "./types";

export function setArticle(payload) {
  return {
    type: SET_ARTICLE,
    payload
  };
}

export function reset() {
  return {
    type: RESET
  };
}
