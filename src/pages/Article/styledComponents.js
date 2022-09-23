import styled from "styled-components";
import { ReactComponent as UserIcon } from "assets/icons/user.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 1rem;
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
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  margin-top: 1rem;
`;

export const Content = styled.p`
  font-size: 1rem;
`;

export const NavbarContentContainer = styled.div`
  background: whitesmoke;
`;

export const UserAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const Divider = styled.hr`
  border: 2px solid;
  background: black;
`;

export const FullWidthContainer = styled.div`
  width: 100%;
`;

export const UserIconContainer = styled.div`
  margin: 0 14px 0 4px;
`;

export const StyledUserIcon = styled(UserIcon)`
  transform: scale(1.5);
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
`;
