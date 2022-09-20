import React from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";

const StyledNavbar = styled(Nav)`
  & a {
    margin-left: 1.3rem;
    margin-right: 1.3rem;
  }

  & a:hover {
    text-decoration: none;
  }
`;

const Links = () => {
  return (
    <StyledNavbar className="me-auto">
      <Nav.Link href="#topTrending">Trending</Nav.Link>
      <Nav.Link href="#everything">Everything</Nav.Link>

      {/* <Nav.Link href="#health">
        <span className="text-white">#</span>health
      </Nav.Link> */}
    </StyledNavbar>
  );
};

export default Links;
