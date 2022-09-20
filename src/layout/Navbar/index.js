import React from "react";
import { Container, Navbar } from "react-bootstrap";

import Logo from "./Logo";
import Links from "./Links";
import CountrySelector from "./CountrySelector";

const NavbarComponent = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Logo />

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Links />
        <CountrySelector />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarComponent;
