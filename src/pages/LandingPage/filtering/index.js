import React from "react";
import styled from "styled-components";

import Search from "../features/Search";
import Country from "../features/Country";

import ResetFilters from "./Reset";

const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

const FilteringTab = () => (
  <Container>
    <div>
      <ResetFilters />
    </div>

    <div style={{ display: "flex" }}>
      <Search />
      <Country />
    </div>
  </Container>
);

export default FilteringTab;
