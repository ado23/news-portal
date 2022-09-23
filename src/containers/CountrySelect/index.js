import React from "react";
import { Dropdown } from "react-bootstrap";

import flags from "assets/flags";
import { StyledDropdownButton } from "./styledComponents";

const CountriesSelector = ({ value, countries, handleSelect }) => (
  <StyledDropdownButton
    title={<img src={flags[value]} alt="ss" width="35%" />}
    id="dropdown-menu"
    variant="light"
    onSelect={(event) => handleSelect(event)}
  >
    {countries.map((element, idx) => (
      <Dropdown.Item
        key={idx}
        as="button"
        eventKey={element.country}
        active={value === element.country}
      >
        <div>
          <img style={{ width: "60%" }} src={flags[element.country]} alt="" />
          {element.country}
        </div>
      </Dropdown.Item>
    ))}
  </StyledDropdownButton>
);

export default CountriesSelector;
