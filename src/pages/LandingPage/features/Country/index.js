import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CountrySelect from "containers/CountrySelect";
import countries from "data/countries/trending";
import { getTopHeadlines, resetArticlesData } from "pages/LandingPage/actions";

const Country = () => {
  const {
    filters: { country, ...rest }
  } = useSelector(({ articles }) => articles);
  const dispatch = useDispatch();

  const handleSelect = (selected) => {
    const newFilter = { ...rest, country: selected.toLowerCase() };

    dispatch(resetArticlesData());
    dispatch(getTopHeadlines(newFilter));
  };

  return (
    <div style={{ marginLeft: "1rem" }}>
      <CountrySelect
        countries={countries}
        handleSelect={handleSelect}
        value={country.toUpperCase()}
      />
    </div>
  );
};

export default Country;
