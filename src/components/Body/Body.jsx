import React from "react";
import {
  BodyContainer,
  Title,
  Subtitle,
  ButtonContainer,
  StyledButton,
} from "./style";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const { translate } = useLanguage();

  const nav = useNavigate();

  return (
    <BodyContainer>
      <Title>{translate("sarlavha_body")}</Title>
      <Subtitle>
        {translate("sarlavha_inner_body")}
        {/* Kelajak kasbini <span>Elektronika</span> bilan o'rganing */}
      </Subtitle>
      <ButtonContainer>
        <StyledButton onClick={() => nav("/direction")} type="primary">
          {translate("map")}
        </StyledButton>
        <StyledButton onClick={() => nav("/about")} type="primary">
          {translate("info")}
        </StyledButton>
      </ButtonContainer>
    </BodyContainer>
  );
};

export default Body;
