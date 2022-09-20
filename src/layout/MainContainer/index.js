import React from "react";
import Container from "./StyledContainer";

const MainContainer = ({ children }) => (
  <Container className="bg-white">{children}</Container>
);

export default MainContainer;
