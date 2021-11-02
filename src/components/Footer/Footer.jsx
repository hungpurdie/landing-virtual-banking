import React from "react";
import PropTypes from "prop-types";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

Footer.propTypes = {};
const toggleHome = () => {
  scroll.scrollToTop();
};

function Footer(props) {
  return (
    <FooterContainer>
      <FooterWrap>
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

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights>
              dolla &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>

            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria_label="Facebook">
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria_label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria_label="Youtube">
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria_label="Twitter">
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria_label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
