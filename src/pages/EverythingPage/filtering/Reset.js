import React from "react";
import { useDispatch } from "react-redux";

import ResetButton from "components/ResetButton";
import TooltipComponent from "components/Tooltip";

import { reset } from "../actions";

const ResetFilters = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(reset());
  };

  return (
    <TooltipComponent message="Reset all filters">
      <ResetButton handleReset={handleOnClick} />
    </TooltipComponent>
  );
};

export default ResetFilters;
