import React from "react";
import { InputGroup } from "react-bootstrap";

import { ReactComponent as Search } from "assets/icons/search.svg";

const Magnifier = () => (
  <InputGroup.Text id="btnGroupAddon">
    <Search />
  </InputGroup.Text>
);

export default Magnifier;
