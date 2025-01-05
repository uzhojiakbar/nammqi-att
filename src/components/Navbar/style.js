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
  }

  &.active {
    color: var(--text-hover);
  }

  &.inactive {
    color: var(--black);
  }
`;
