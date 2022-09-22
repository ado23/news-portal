import React from "react";
import { useDispatch } from "react-redux";

import ResetButton from "components/ResetButton";
import TooltipComponent from "components/Tooltip";

import { getTopHeadlines, reset } from "../actions";

const ResetFilters = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(reset());

    const payload = {
      country: "us",
      category: null,
      q: null,
      pageSize: 20,
      page: 1
    };

    dispatch(getTopHeadlines(payload));
  };

  return (
    <TooltipComponent message="Reset all filters">
      <ResetButton handleReset={() => handleOnClick()} />
    </TooltipComponent>
  );
};

export default ResetFilters;
