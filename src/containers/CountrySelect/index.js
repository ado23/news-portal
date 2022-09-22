import React from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";

import flags from "assets/flags";
import { StyledDropdown } from "./styledComponents";

const CountriesSelector = ({ value, countries, handleSelect }) => (
  <StyledDropdown
    title={<img src={flags[value]} alt="ss" width="45%" />}
    onSelect={(selected) => handleSelect(selected)}
  >
    {countries.map((element, idx) => {
      const { country, uuid } = element;

      return (
        <>
          <NavDropdown.Item
            key={uuid}
            eventKey={country}
            active={value === country}
          >
            <div
              style={{
                display: "flex",
                // justifyContent: "space-evenly",
                alignItems: "center",
                height: "1rem",
                width: "3rem"
              }}
            >
              <img style={{ width: "60%" }} src={flags[country]} alt="" />
              <span style={{ fontSize: "14px" }}> {country} </span>
            </div>
          </NavDropdown.Item>

          {countries.length > idx + 1 && <Dropdown.Divider />}
        </>
      );
    })}
  </StyledDropdown>
);

export default CountriesSelector;
