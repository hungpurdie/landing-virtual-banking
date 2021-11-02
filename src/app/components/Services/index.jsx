import React from "react";
import styled from "styled-components";
import CardService from "./CardService";
import { ServicesCardData } from "./data";

Services.propTypes = {};

function Services(props) {
  return (
    <ServicesContainer>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        {ServicesCardData.map((card) => (
          <CardService
            icon={card.icon}
            title={card.title}
            desc={card.desc}
            id={card.icon}
          />
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;

const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 48px) {
    height: 1300px;
  }
`;

const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  @media screen and (min-width: 480px) {
    font-size: 2rem;
  }
`;
