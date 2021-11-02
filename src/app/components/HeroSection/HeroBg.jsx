import React from "react";
import PropTypes from "prop-types";
import video from "src/app/assets/videos/video.mp4";
import styled from "styled-components";

HeroBg.propTypes = {};

function HeroBg(props) {
  return (
    <HeroBgWrapper>
      <VideoBg autoPlay loop muted src={video} type="/video/mp4" />
    </HeroBgWrapper>
  );
}

export default HeroBg;

const HeroBgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;s
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
