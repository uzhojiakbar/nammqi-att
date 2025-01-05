import styled, { keyframes } from "styled-components";
import { Button } from "antd";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 70vh;
  padding: 40px;
  background-color: #ffffff;
  animation: ${fadeIn} 1.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 20px;
  animation: ${fadeIn} 1.5s ease-in-out 0.1s;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  font-size: 26px;
  color: #555555;
  margin-bottom: 30px;
  animation: ${fadeIn} 1.5s ease-in-out 0.5s;

  span {
    color: #007bff;
    font-weight: bold;
    animation: ${pulse} 2s infinite;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #007bff;
  border: none;
  color: white;
  font-size: 20px;
  padding: 20px 25px;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
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
