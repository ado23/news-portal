import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Navbar from "layout/Navbar";
import Footer from "layout/Footer";
import MainContainer from "layout/MainContainer";

import {
  Image,
  Source,
  Divider,
  Content,
  Container,
  Description,
  UserAndDate,
  UserContainer,
  StyledUserIcon,
  UserIconContainer,
  FullWidthContainer,
  NavbarContentContainer
} from "./styledComponents";

const ArticleDetails = () => {
  const navigate = useNavigate();
  const { source, author, title, description, content, image, publishedAt } =
    useSelector(({ articleDetails }) => articleDetails);

  return (
    <>
      <NavbarContentContainer>
        <Navbar />

        <MainContainer>
          <Container>
            <FullWidthContainer>
              <h3>{title}</h3>

              <Divider />
              <Content>{content}</Content>
              <Image src={image} />

              <UserAndDate>
                <UserContainer>
                  <UserIconContainer>
                    <StyledUserIcon />
                  </UserIconContainer>
                  <p className="font-weight-light"> {author} </p>
                </UserContainer>

                <p className="font-weight-light">
                  {new Date(publishedAt).toDateString("en-US")}
                </p>
              </UserAndDate>
            </FullWidthContainer>

            <Source>{source}</Source>
            <Description className="h4">{description}</Description>

            <Button
              variant="outline-secondary"
              style={{ alignSelf: "end" }}
              onClick={() => navigate(-1)}
            >
              BACK
            </Button>
          </Container>
        </MainContainer>
      </NavbarContentContainer>

      <Footer />
    </>
  );
};

export default ArticleDetails;
