import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Form, InputGroup } from "react-bootstrap";

import Magnifier from "./Magnifier";

const StyledInputGroup = styled(InputGroup)`
  width: ${({ $customWidth }) => $customWidth};
`;

const StyledFomControl = styled(Form.Control)`
  border-radius: 0 0.375rem 0.375rem 0;
`;

const SearchComponent = ({ handleKeyPress, placeholder, width, value }) => (
  <div data-testid="search-component-main-div">
    <StyledInputGroup
      data-testid="search-input-group"
      className="d-flex"
      $customWidth={width}
    >
      <Magnifier />

      <StyledFomControl
        value={value}
        type="search"
        aria-label="Search"
        placeholder={placeholder}
        onKeyPress={(event) => handleKeyPress(event)}
        onChange={(event) => handleKeyPress(event)}
      />
    </StyledInputGroup>
  </div>
);

SearchComponent.propTypes = {
  handleKeyPress: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default SearchComponent;
