import React from "react";
import { Navbar } from "react-bootstrap";

import assets from "assets/images";

const Logo = () => (
  <Navbar.Brand href="/" style={{ width: "21%" }}>
    <img
      alt=""
      src={assets.logo}
      width="87%"
      className="d-inline-block align-top"
    />
  </Navbar.Brand>
);

export default Logo;
