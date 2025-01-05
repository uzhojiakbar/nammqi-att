import React from "react";
import {
  BodyContainer,
  Title,
  Subtitle,
  ButtonContainer,
  StyledButton,
} from "./style";
import { useLanguage } from "../../context/LanguageContext";

const Body = () => {
  const { translate } = useLanguage();

  return (
    <BodyContainer>
      <Title>{translate("sarlavha_body")}</Title>
      <Subtitle>
        {translate("sarlavha_inner_body")}
        {/* Kelajak kasbini <span>Elektronika</span> bilan o'rganing */}
      </Subtitle>
      <ButtonContainer>
        <StyledButton type="primary">Yo'l xarita</StyledButton>
        <StyledButton type="primary">Fakultet haqida</StyledButton>
      </ButtonContainer>
    </BodyContainer>
  );
};

export default Body;
