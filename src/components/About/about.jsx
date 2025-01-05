import React from "react";
import styled from "styled-components";

const CenterItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 89vh;

  > iframe {
    width: 100vw;
    height: 89vh;
    user-select: none;
    background-color: white !important;
  }
`;

const About = () => {
  return (
    <CenterItems>
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTcIk-910ioM1T6pqz0MVvn2xSbE-yYUsBomj2TlnQ4VtyWTrLScq3SO_PzUcHg5x_6iOMEKrG5SpgM/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        s
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </CenterItems>
  );
};

export default About;
