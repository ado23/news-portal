import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Search from "components/Search";
import { getTopHeadlines } from "../../actions";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const filters = useSelector(({ articles }) => articles.filters);

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      const newFilter = { ...filters, q: event.target.value };
      dispatch(getTopHeadlines(newFilter));
    }
  };

  const handleOnClick = (event) => {
    console.log("sss", event);
  };

  return (
    <Search
      width="19rem"
      handleOnClick={handleOnClick}
      handleKeyPress={handleKeyPress}
      placeholder="Search by keyword or phrase"
    />
  );
};

export default SearchComponent;
