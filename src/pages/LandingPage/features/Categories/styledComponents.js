import { Nav } from "react-bootstrap";
import styled from "styled-components";

export const Hashtag = styled.span`
  border-radius: 5px;
  padding: 2px;
`;

export const StyledNav = styled(Nav)`
  & .nav-link.active {
    background-color: darkslategray;
  }

  border-radius: 8px;
`;

export const Container = styled.div`
  margin: 2rem 0 1rem 0;
`;
