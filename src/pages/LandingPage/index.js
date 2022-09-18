import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import { getTopHeadlines } from "./actions";

const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopHeadlines({ filter: { country: "us" } }));
  }, [dispatch]);

  const { articles } = useSelector(({ articles }) => articles);
  console.log("🚀 ~ file: index.js ~ line 13 ~ LandingPage ~ samoState", articles);

  return (
    <Container>
      <Row>
        {articles.map((element, idx) => (
          <Col key={idx}>
            <Card style={{ width: "18rem", marginBottom: "13px" }}>
              <Card.Img variant="top" src={element.urlToImage} />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>{element.description}</Card.Text>
                <Button variant="primary">Primary</Button>{" "}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LandingPage;
