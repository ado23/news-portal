import React from "react";
import PropTypes from "prop-types";
import { Container, Title } from "./styledComponents";

const HeaderTitle = ({ title }) => (
  <Container>
    <Title>#{title}</Title>
  </Container>
);

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default HeaderTitle;
