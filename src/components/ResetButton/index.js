import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import { ReactComponent as ResetIcon } from "assets/icons/reset.svg";

const ResetButton = ({ handleReset }) => (
  <Button variant="outline-secondary" onClick={handleReset}>
    <ResetIcon data-testid="reset-button-icon" />
  </Button>
);

ResetButton.propTypes = {
  handleReset: PropTypes.func.isRequired
};

export default ResetButton;
