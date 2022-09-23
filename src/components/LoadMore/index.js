import React from "react";
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

export default LoadMoreButton;
