import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

import Card from "components/Card";

const RenderCards = ({ articles }) => (
  <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4">
    {articles.map((article, idx) => (
      <Col key={idx}>
        <Card article={article} />
      </Col>
    ))}
  </Row>
);

RenderCards.propTypes = {
  articles: PropTypes.array.isRequired
};

export default RenderCards;
