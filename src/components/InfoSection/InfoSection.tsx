import styled from 'styled-components';
import Button from '~/components/Button';
import type { Info } from '~/mocks/infos';
import { mediaQueries } from '~/styles';

export default function InfoSection({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  imgAlt,
  primary,
  dark,
}: Info) {
  return (
    <InfoContainer lightBg={lightBg}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button
                  to='/'
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  primary={primary ? true : false}
                  dark={dark ? true : false}
                >
                  {buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={imgAlt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
}

const InfoContainer = styled.div<{ lightBg: boolean }>`
  color: #fff;
  background-color: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
  @media screen and (${mediaQueries.tabletUp}) {
    padding: 100px 0;
  }
`;

const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const InfoRow = styled.div<{ imgStart: boolean }>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (${mediaQueries.tabletUp}) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Heading = styled.h1<{ lightText: boolean }>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
  @media screen and (${mediaQueries.mobileUpL}) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p<{ darkText: boolean }>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
