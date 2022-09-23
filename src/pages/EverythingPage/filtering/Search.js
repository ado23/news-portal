import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Search from "components/Search";
import { getArticles, resetArticlesData, setFilters } from "../actions";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector(
    ({ articlesEverything }) => articlesEverything
  );

  const handleKeyPress = (event) => {
    const searchFilterValue =
      event.target.value === "" ? null : event.target.value;

    const newFilter = { ...filters, q: searchFilterValue };

    console.log("SADJADJAS: ", newFilter);

    if (event.charCode === 13) {
      console.log("UDEM VODEJ", newFilter);
      dispatch(resetArticlesData());
      dispatch(getArticles(newFilter));
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
