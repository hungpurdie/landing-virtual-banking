import styled from 'styled-components';
import { Service } from '~/mocks/services';
import { mediaQueries } from '~/styles';
import CardService from './CardService';

function Services({ services }: { services: Service[] }) {
  return (
    <ServicesContainer>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        {services.map((card) => (
          <CardService
            key={card.icon}
            icon={card.icon}
            title={card.title}
            description={card.description}
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
  @media screen and (${mediaQueries.laptopUp}) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (${mediaQueries.tabletUp}) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  @media screen and (${mediaQueries.mobileUpL}) {
    font-size: 2rem;
  }
`;
