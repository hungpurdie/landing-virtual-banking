import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

FooterSocialMedia.propTypes = {};

function FooterSocialMedia({ toggleHome }) {
  return (
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
  );
}

export default FooterSocialMedia;

const SocialMedia = styled.section`
  max-width: 1150px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1150px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
