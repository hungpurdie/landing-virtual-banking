import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

FooterLinks.propTypes = {};

function FooterLinks(props) {
  return (
    <FooterLinksContainer>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>About us </FooterLinkTitle>
          <FooterLink to="/sign-in">About us</FooterLink>
          <FooterLink to="/sign-in">How it works</FooterLink>
          <FooterLink to="/sign-in">Testimonials</FooterLink>
          <FooterLink to="/sign-in">Careers</FooterLink>
          <FooterLink to="/sign-in">Investors</FooterLink>
          <FooterLink to="/sign-in">Terms of Services</FooterLink>
        </FooterLinkItems>

        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/sign-in">Contact</FooterLink>
          <FooterLink to="/sign-in">Support</FooterLink>
          <FooterLink to="/sign-in">Destinations</FooterLink>
          <FooterLink to="/sign-in">Sponsorships</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>

      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Video</FooterLinkTitle>
          <FooterLink to="/sign-in">Submit video</FooterLink>
          <FooterLink to="/sign-in">Ambassadors</FooterLink>
          <FooterLink to="/sign-in">Agency</FooterLink>
          <FooterLink to="/sign-in">Influencer</FooterLink>
        </FooterLinkItems>

        <FooterLinkItems>
          <FooterLinkTitle>Social media</FooterLinkTitle>
          <FooterLink to="/sign-in">Instagram</FooterLink>
          <FooterLink to="/sign-in">Facebook</FooterLink>
          <FooterLink to="/sign-in">Youtube</FooterLink>
          <FooterLink to="/sign-in">Twitter</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterLinksContainer>
  );
}

export default FooterLinks;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  &:hover {
    color: #01bf71;
  }
`;
