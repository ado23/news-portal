import { SHOW_LOADING, HIDE_LOADING } from "./types";

const INITIAL_STATE = {
  loadingRequests: []
};

export default function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, action.payload]
      };

    case HIDE_LOADING:
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(
          (request) => request !== action.payload
        )
      };
    default:
      return state;
  }
}
