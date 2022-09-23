import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: center;
`;

const NoResults = ({ title }) => (
  <Container>
    <p className="font-monospace h1">{title}</p>
  </Container>
);

NoResults.propTypes = {
  title: PropTypes.string.isRequired
};

export default NoResults;
