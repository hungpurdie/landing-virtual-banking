import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

export const Button = styled(LinkS)`
  border-radius: 50px;
  background-color: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#FFF" : "#01bf71")};
    transition: all 0.2s ease-in-out;
  }
`;
