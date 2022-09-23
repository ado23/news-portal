import React from "react";
import styled from "styled-components";

import Search from "./Search";
import Country from "./Country";

import ResetFilters from "./Reset";

// import { Container } from "react-bootstrap";

const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

const CountryAndSearch = styled.div`
  display: flex;
  align-items: center;
`;

const FilteringTab = () => (
  <Container>
    <div>
      <ResetFilters />
    </div>

    <CountryAndSearch>
      <Search />
      <Country />
    </CountryAndSearch>
  </Container>
);

export default FilteringTab;
