import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

export const StyledSpiner = styled(Spinner)`
  background: back;
  position: absolute;
  top: 50%;
  left: 47%;

  &.spinner-grow {
    --bs-spinner-width: 6rem;
    --bs-spinner-height: 6rem;
    --bs-spinner-animation-speed: 1s;
  }
`;
