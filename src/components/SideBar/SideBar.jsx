import React from "react";
import PropTypes from "prop-types";
import {
  CloseIcon,
  Icon,
  SideBarContainer,
  SideBarLink,
  SideBarMenu,
  SideBarRoute,
  SideBarWrapper,
  SideBtnWrap,
} from "./SideBarElements.js";

SideBar.propTypes = {};

function SideBar({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon></CloseIcon>
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
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
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signup" onClick={toggle}>
            Sign up
          </SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default SideBar;
