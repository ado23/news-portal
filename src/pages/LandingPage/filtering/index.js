import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import Search from "./Search";
import Country from "./Country";

import ResetFilters from "./Reset";

const StyledContainer = styled(Container)`
  margin-bottom: 1rem;
`;

const FilteringTab = () => (
  <StyledContainer>
    <Row>
      <Col style={{ display: "flex", justifyContent: "left" }}>
        <ResetFilters />
      </Col>

      <Col xs lg="2" style={{ display: "flex", justifyContent: "right" }}>
        <Search />
      </Col>

      <Col md="auto">
        <Country />
      </Col>
    </Row>
  </StyledContainer>
);

export default FilteringTab;
