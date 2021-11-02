import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

SideBarMenu.propTypes = {};

function SideBarMenu({ toggle }) {
  return (
    <SideBarMenuList>
      <SideBarLink to="about" onClick={toggle}>
        About
      </SideBarLink>
      <SideBarLink to="discover" onClick={toggle}>
        Discover
      </SideBarLink>
      <SideBarLink to="services" onClick={toggle}>
        Services
      </SideBarLink>
      <SideBarLink to="signup" onClick={toggle}>
        Sign Up
      </SideBarLink>
    </SideBarMenuList>
  );
}

export default SideBarMenu;

const SideBarMenuList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const SideBarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
