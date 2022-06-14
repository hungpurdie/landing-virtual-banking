import { useState } from 'react';
import styled from 'styled-components';
import Button from '~/components/Button';
import videoBg from '~/assets/videos/videoBg.mp4';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { mediaQueries } from '~/styles';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBgWrapper>
        <VideoBg autoPlay loop muted src={videoBg} />
      </HeroBgWrapper>
      <HeroContentWrapper>
        <HeroH1>Virtual Banking Made easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='/'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            dark={true}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContentWrapper>
    </HeroContainer>
  );
}

export default HeroSection;

const HeroContainer = styled.div`
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%),
      rgba(0, 0, 0, 0.6) 100% linear-gradient(180%, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

const HeroBgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #234a34;
`;

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

  @media screen and (${mediaQueries.tabletUp}) {
    font-size: 40px;
  }

  @media screen and (${mediaQueries.mobileUpL}) {
    font-size: 32px;
  }
`;

const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (${mediaQueries.tabletUp}) {
    font-size: 24px;
  }

  @media screen and (${mediaQueries.mobileUpL}) {
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
