import React from "react";
import styled from "styled-components";

import Search from "../features/Search";
import Country from "../features/Country";

const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: end;
`;

const FilteringTab = () => (
  <Container>
    <Search />
    <Country />
  </Container>
);

export default FilteringTab;
