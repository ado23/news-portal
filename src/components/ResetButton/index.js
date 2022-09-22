import React from "react";
import { Button } from "react-bootstrap";

import { ReactComponent as ResetIcon } from "assets/icons/reset.svg";

const ResetButton = ({ handleReset }) => (
  <Button variant="outline-secondary" onClick={handleReset}>
    <ResetIcon />
  </Button>
);

export default ResetButton;
