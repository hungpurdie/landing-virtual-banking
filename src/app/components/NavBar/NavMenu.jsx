import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

NavMenu.propTypes = {};

function NavMenu(props) {
  return (
    <NavList>
      <NavItem>
        <NavLinks
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
        >
          About
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks
          to="discover"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
        >
          Discover
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks
          to="services"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
        >
          Services
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks
          to="signup"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
        >
          Sign Up
        </NavLinks>
      </NavItem>
    </NavList>
  );
}

export default NavMenu;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:active {
    border-bottom: 3px solid #01bf71;
  }
`;
