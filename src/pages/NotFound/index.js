import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import images from "assets/images";

const Image = styled.img`
  object-fit: contain;
  height: 85vh;
  width: 100%;
  margin-top: 3vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Image src={images.image404} alt="not found" />
      <Button variant="success" onClick={() => navigate(-1)}>
        TAKE ME BACK
      </Button>
    </Container>
  );
};

export default NotFound;
