import React from "react";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import FooterLinks from "./FooterLinks";
import FooterSocialMedia from "./FooterSocialMedia";

Footer.propTypes = {};

const toggleHome = () => {
  scroll.scrollToTop();
};

function Footer(props) {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinks />
        <FooterSocialMedia toggleHome={toggleHome} />
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  background-color: #101522;
`;

const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1150px;
  margin: 0 auto;
`;
