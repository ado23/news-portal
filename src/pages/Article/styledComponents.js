import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 30rem;
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;

export const Source = styled.div`
  background: black;
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  align-self: start;
  margin-top: 1rem;
`;

export const Description = styled.p`
  font-size: 2rem;
`;

export const Content = styled.p`
  font-size: 1rem;
`;
