import React from "react";
import { NavDropdown, Nav } from "react-bootstrap";

import flags from "assets/flags";
import countries from "./countries";
import { StyledDropdown } from "./styledComponents";

const RenderCountries = () =>
  countries.map((element, idx) => (
    <NavDropdown.Item key={idx}>
      {element ? <img width="60%" src={flags[element]} alt="" /> : "All"}
    </NavDropdown.Item>
  ));

const CountrySelector = () => (
  <Nav>
    <StyledDropdown
      id="collasible-nav-dropdown"
      title={<img width="40%" src={flags.AR} alt="" />}
    >
      <RenderCountries />
    </StyledDropdown>
  </Nav>
);

export default CountrySelector;
