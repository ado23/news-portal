import React from "react";
import styled from "styled-components";

import Search from "./Search";

import ResetFilters from "./Reset";
import Sort from "./Sort";

const Container = styled.div`
  margin: 2rem 0rem;
  display: flex;
  justify-content: space-between;
`;

const FilteringTab = () => (
  <Container>
    <div>
      <ResetFilters />
    </div>

    <div style={{ display: "flex", alignItems: "center" }}>
      <Sort />
      <Search />
    </div>
  </Container>
);

export default FilteringTab;
