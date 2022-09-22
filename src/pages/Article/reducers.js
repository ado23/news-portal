import { SET_ARTICLE, RESET } from "./types";

const INITIAL_STATE = {
  source: "",
  author: "",
  title: "",
  description: "",
  content: "",
  image: "",
  publishedAt: ""
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ARTICLE:
      return { ...state, ...action.payload };

    case RESET:
      return { INITIAL_STATE };

    default:
      return state;
  }
}
