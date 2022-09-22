import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CountrySelect from "containers/CountrySelect";
import countries from "data/countries/trending";
import { getTopHeadlines, resetArticlesData } from "pages/LandingPage/actions";

import TooltipComponent from "components/Tooltip";

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
      <TooltipComponent
        message="Choose country/region from which you want to see news"
        placement="top"
      >
        <CountrySelect
          countries={countries}
          handleSelect={handleSelect}
          value={country.toUpperCase()}
        />
      </TooltipComponent>
    </div>
  );
};

export default Country;
