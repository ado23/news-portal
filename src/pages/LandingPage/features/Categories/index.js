import React from "react";
import { Nav } from "react-bootstrap";

import config from "./config";
import { Hashtag, StyledNav, Container } from "./styledComponents";

const Categories = () => (
  <Container>
    <StyledNav fill variant="pills" className="bg-dark rounded-top">
      {Object.keys(config).map((element, idx) => (
        <Nav.Item key={`${element}-${idx}`}>
          <Nav.Link as="button" href={`${element}`}>
            <Hashtag
              className={`text-${config[element]} border border-${config[element]}`}
            >
              #
            </Hashtag>

            <span className="text-white text-uppercase"> {element}</span>
          </Nav.Link>
        </Nav.Item>
      ))}
    </StyledNav>
  </Container>
);

export default Categories;
