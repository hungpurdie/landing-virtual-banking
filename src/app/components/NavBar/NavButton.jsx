import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

NavButton.propTypes = {};

function NavButton(props) {
  return (
    <NavBtn>
      <NavBtnLink
        to="signin"
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
      >
        Sign In
      </NavBtnLink>
    </NavBtn>
  );
}

export default NavButton;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(LinkR)`
  background-color: #01fb71;
  border-radius: 50px;
  padding: 10px 20px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #fff;
    color: #010606;
  }
`;
