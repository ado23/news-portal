import React from "react";
import styled from "styled-components";
import { Form, InputGroup } from "react-bootstrap";

import Magnifier from "./Magnifier";

const StyledInputGroup = styled(InputGroup)`
  width: ${({ $customWidth }) => $customWidth};
`;

const SearchComponent = ({
  handleKeyPress,
  handleOnClick,
  placeholder,
  width
}) => (
  <StyledInputGroup className="d-flex" $customWidth={width}>
    <Magnifier />

    <Form.Control
      type="search"
      aria-label="Search"
      placeholder={placeholder}
      onKeyPress={(event) => handleKeyPress(event)}
      onClick={(event) => handleOnClick(event)}
    />
  </StyledInputGroup>
);

export default SearchComponent;
