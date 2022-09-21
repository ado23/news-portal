import React from "react";
import { useSelector } from "react-redux";

import { StyledSpiner, Container } from "./styledComponents";

const Loader = () => {
  const { loadingRequests } = useSelector(({ loader }) => loader);

  if (loadingRequests.length === 0) return null;

  return (
    <Container>
      <StyledSpiner animation="grow" />
    </Container>
  );
};

export default Loader;
