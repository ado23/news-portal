import React from "react";
import { Container, Title } from "./styledComponents";

const HeaderTitle = ({ title }) => (
  <Container>
    <Title>#{title}</Title>
  </Container>
);

export default HeaderTitle;
