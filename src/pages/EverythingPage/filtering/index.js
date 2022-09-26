import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import Sort from "./Sort";
import Search from "./Search";
import ResetFilters from "./Reset";

const StyledContainer = styled(Container)`
  margin: 1rem 0 1rem 0;
`;

const FilteringTab = () => (
  <StyledContainer>
    <Row>
      <Col style={{ display: "flex", justifyContent: "left" }}>
        <ResetFilters />
      </Col>

      <Col xs lg="2" style={{ display: "flex", justifyContent: "right" }}>
        <Sort />
      </Col>

      <Col md="auto">
        <Search />
      </Col>
    </Row>
  </StyledContainer>
);

export default FilteringTab;
