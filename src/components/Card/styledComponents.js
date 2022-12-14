import { Card } from "react-bootstrap";
import styled from "styled-components";

export const CardImage = styled(Card.Img)`
  width: 100%;
  height: 10rem;
`;

export const CardBody = styled(Card.Body)`
  height: 18rem;
`;

export const CardTitle = styled(Card.Title)`
  height: 4.8rem;
  overflow: hidden;
`;

export const CardTextContainer = styled.div`
  max-height: 9rem;
  overflow: hidden;
`;
