import { SET_ARTICLE, RESET } from "./types";

const INITIAL_STATE = {
  source: "Placeholder source",
  author: "Placeholder author",
  title: "Placeholder title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image: "",
  publishedAt: new Date().toDateString("en-US")
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
