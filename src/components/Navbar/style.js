import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 10vh;
  padding: 2px 20px;

  position: sticky;
  top: 0;
  left: 0;

  background-color: white;

  > div {
    height: 100%;
  }

  @media (max-width: 600px) {
    padding: 2px 10px;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  user-select: none;

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const ChangeLanguage = styled.div`
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-weight: 900;

  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 16px;
  }
  @media (max-width: 380px) {
    font-size: 14px;
  }

  &:hover {
    color: var(--text-hover);
    opacity: 0.6;
  }

  &.active {
    color: var(--text-hover);
  }

  &.inactive {
    color: var(--black);
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  user-select: none;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const NavCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  user-select: none;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--black);
  font-size: 18px;
  font-weight: 900;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }

  &:hover {
    color: var(--text-hover);
  }

  &.active {
    color: var(--text-hover);
  }

  &.inactive {
    color: var(--black);
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    font-size: 22px;
  }
`;
