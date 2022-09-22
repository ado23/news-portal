import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

// import { getTopHeadlines } from "./actions";

import Navbar from "layout/Navbar";
import Footer from "layout/Footer";
import MainContainer from "layout/MainContainer";

import { ReactComponent as UserIcon } from "assets/icons/user.svg";

import {
  Container,
  Image,
  Source,
  Description,
  Content
} from "./styledComponents";

const Article = () => {
  const navigate = useNavigate();

  const { source, author, title, description, content, image, publishedAt } =
    useSelector(({ articleDetails }) => articleDetails);

  return (
    <>
      <Navbar />

      <MainContainer>
        <Container>
          <div style={{ width: "100%" }}>
            <h3 style={{ margin: "2rem 0 0 0" }}>{title}</h3>
            <hr style={{ border: "2px solid", background: "black" }} />

            <Image src={image} />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem"
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <UserIcon />
                <p className="font-weight-light"> {author} </p>
              </div>

              <p className="font-weight-light">
                {new Date(publishedAt).toDateString("en-US")}
              </p>
            </div>
          </div>

          <Source>{source}</Source>

          <Description>{description}</Description>
          <Content>{content}</Content>

          <Button
            variant="outline-secondary"
            onClick={() => navigate(-1)}
            style={{ alignSelf: "end" }}
          >
            BACK
          </Button>
        </Container>
      </MainContainer>

      <Footer />
    </>
  );
};

export default Article;
