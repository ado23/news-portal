import { SHOW_LOADING, HIDE_LOADING } from "./types";

export function showLoading(loadingRequestId) {
  return {
    type: SHOW_LOADING,
    payload: loadingRequestId
  };
}

export function hideLoading(loadingRequestId) {
  return {
    type: HIDE_LOADING,
    payload: loadingRequestId
  };
}
