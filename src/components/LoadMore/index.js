import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const StyledButton = styled(Button)`
  justify-self: center;
`;

const LoadMoreButton = ({ onClickHandler, isDisabled }) => (
  <StyledButton
    onClick={onClickHandler}
    disabled={isDisabled}
    variant="success text-white"
  >
    Load more ...
  </StyledButton>
);

LoadMoreButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default LoadMoreButton;
