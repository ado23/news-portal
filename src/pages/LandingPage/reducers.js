import { GET_TOP_HEADLINES_SUCCESS } from "./types";

const INITIAL_STATE = {
  articles: []
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TOP_HEADLINES_SUCCESS:
      return {
        ...state,
        articles: action.payload
      };

    default:
      return state;
  }
}
