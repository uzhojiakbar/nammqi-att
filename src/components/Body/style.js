import styled from "styled-components";

export const BodyContainer = styled.div``;
export const Title = styled.div`
  font-size: ${({ size }) => (size ? size : "22px")};
`;
export const MiniTite = styled.div`
  font-size: 20px;
  max-width: 50vw;

  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (max-width: 380px) {
    font-size: 14px;
  }
`;
// export const BodyContainer = styled.div``;
