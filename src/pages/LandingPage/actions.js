import { GET_TOP_HEADLINES, RESET } from "./types";

export function getTopHeadlines(payload) {
  return {
    type: GET_TOP_HEADLINES,
    payload
  };
}

export function reset() {
  return {
    type: RESET
  };
}
