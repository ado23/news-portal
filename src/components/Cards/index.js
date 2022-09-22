import React from "react";
import { Row, Col } from "react-bootstrap";

import NewsCard from "components/Card";

const RenderNewsCard = ({ articles }) => (
  <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4">
    {articles.map((article, idx) => (
      <Col key={idx}>
        <NewsCard article={article} />
      </Col>
    ))}
  </Row>
);

export default RenderNewsCard;
