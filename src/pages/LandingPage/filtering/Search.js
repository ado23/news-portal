import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Search from "components/Search";
import { getTopHeadlines, resetArticlesData, setFilters } from "../actions";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector(({ articles }) => articles);

  const handleKeyPress = (event) => {
    const newFilter = { ...filters, q: event.target.value };

    if (event.charCode === 13) {
      dispatch(resetArticlesData());
      dispatch(getTopHeadlines(newFilter));
    }

    dispatch(setFilters(newFilter));
  };

  return (
    <Search
      width="19rem"
      handleKeyPress={handleKeyPress}
      placeholder="Search by keyword or phrase"
      value={filters.q === null ? "" : filters.q}
    />
  );
};

export default SearchComponent;
