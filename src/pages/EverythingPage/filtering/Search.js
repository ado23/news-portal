import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Search from "components/Search";
import { getArticles, resetArticlesData } from "../actions";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector(
    ({ articlesEverything }) => articlesEverything
  );

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      const newFilter = { ...filters, q: event.target.value };

      dispatch(resetArticlesData());
      dispatch(getArticles(newFilter));
    }
  };

  return (
    <Search
      width="19rem"
      handleKeyPress={handleKeyPress}
      placeholder="Search by keyword or phrase"
    />
  );
};

export default SearchComponent;
