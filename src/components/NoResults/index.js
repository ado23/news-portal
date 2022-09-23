import React from "react";

import styled from "styled-components";

const Container = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: center;
`;

const NoResults = ({ title }) => (
  <Container>
    <p class="font-monospace h1">{title}</p>
  </Container>
);

export default NoResults;
