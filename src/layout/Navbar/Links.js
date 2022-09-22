import React from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";

import { Outlet, Link } from "react-router-dom";

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
      <Link className="nav-link" to="/">
        Trending
      </Link>

      <Link className="nav-link" to="/everything">
        Everything
      </Link>

      <Outlet />
    </StyledNavbar>
  );
};

export default Links;
