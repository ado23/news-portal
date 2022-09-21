import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// import { getTopHeadlines } from "./actions";

import Navbar from "layout/Navbar";
import Footer from "layout/Footer";
import MainContainer from "layout/MainContainer";

import NewsCard from "components/Card";
import Categories from "components/Categories";
import HeaderTitle from "components/HeaderTitle";

const RenderNewsCards = ({ articles }) => (
  <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4">
    {articles.map((element, idx) => (
      <Col key={idx}>
        <NewsCard
          urlToImage={element.urlToImage}
          title={element.title}
          description={element.description}
        />
      </Col>
    ))}
  </Row>
);

const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getTopHeadlines({ filter: { country: "us" } }));
  }, [dispatch]);

  const { articles } = useSelector(({ articles }) => articles);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <MainContainer>
        <HeaderTitle title="TRENDING NEWS" />

        <button onClick={() => navigate("/articles")}> KLIKNI ME</button>

        <Categories />
        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "end"
          }}
        >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search by keyword or phrase"
              className="me-2"
              aria-label="Search"
              style={{ width: "19rem", marginRight: "0 !imptortant" }}
            />
          </Form>
        </div>

        <RenderNewsCards articles={articles} />
      </MainContainer>

      <Footer />
    </>
  );
};

export default LandingPage;
