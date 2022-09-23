import React from "react";
import styled from "styled-components";

import { ReactComponent as GithubIcon } from "assets/icons/github.svg";

const Container = styled.div`
  background: whitesmoke;

  .my-4 {
    margin-bottom: 0px !important;
  }
`;

const Footer = () => (
  <Container>
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">&copy; 2022 News portal, Inc</p>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a
              href="https://github.com/ado23"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link px-2 text-muted"
            >
              <GithubIcon />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  </Container>
);

export default Footer;
