import React, { useState } from "react";
import PropTypes from "prop-types";
import HeroBg from "./HeroBg";
import HeroContent from "./HeroContent";
import styled from "styled-components";

HeroSection.propTypes = {};

function HeroSection(props) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg />
      <HeroContent onHover={onHover} hover={hover} />
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
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%),
      rgba(0, 0, 0, 0.6) 100%
        linear-gradient(180%, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;
