import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { mediaQueries } from '~/styles';

export default function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us </FooterLinkTitle>
              <FooterLink to='/sign-in'>About us</FooterLink>
              <FooterLink to='/sign-in'>How it works</FooterLink>
              <FooterLink to='/sign-in'>Testimonials</FooterLink>
              <FooterLink to='/sign-in'>Careers</FooterLink>
              <FooterLink to='/sign-in'>Investors</FooterLink>
              <FooterLink to='/sign-in'>Terms of Services</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/sign-in'>Contact</FooterLink>
              <FooterLink to='/sign-in'>Support</FooterLink>
              <FooterLink to='/sign-in'>Destinations</FooterLink>
              <FooterLink to='/sign-in'>Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Video</FooterLinkTitle>
              <FooterLink to='/sign-in'>Submit video</FooterLink>
              <FooterLink to='/sign-in'>Ambassadors</FooterLink>
              <FooterLink to='/sign-in'>Agency</FooterLink>
              <FooterLink to='/sign-in'>Influencer</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Social media</FooterLinkTitle>
              <FooterLink to='/sign-in'>Instagram</FooterLink>
              <FooterLink to='/sign-in'>Facebook</FooterLink>
              <FooterLink to='/sign-in'>Youtube</FooterLink>
              <FooterLink to='/sign-in'>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights>
              dolla &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>

            <SocialIcons>
              <SocialIconLink href='/' target='_blank'>
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href='/' target='_blank'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank'>
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href='/' target='_blank'>
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href='/' target='_blank'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

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

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (${mediaQueries.tabletUp}) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (${mediaQueries.tabletUp}) {
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
  @media screen and (${mediaQueries.mobileUpL}) {
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
  @media screen and (${mediaQueries.tabletUp}) {
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
