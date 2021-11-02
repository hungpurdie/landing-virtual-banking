import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../Button/ButtonElements";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

HeroContent.propTypes = {};

function HeroContent({ hover, onHover }) {
  return (
    <HeroContentWrapper>
      <HeroH1>Virtual Banking Made easy</HeroH1>
      <HeroP>
        Sign up for a new account today and receive $250 in credit towards your
        next payment.
      </HeroP>
      <HeroBtnWrapper>
        <Button
          to="signup"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
        >
          Get Started {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroBtnWrapper>
    </HeroContentWrapper>
  );
}

export default HeroContent;

const HeroContentWrapper = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
