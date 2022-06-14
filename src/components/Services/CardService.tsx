import styled from 'styled-components';
import type { Service } from '~/mocks/services';

function CardService({ icon, title, description }: Service) {
  return (
    <ServiceCard>
      <ServicesIcon src={icon} />
      <ServicesH2>{title}</ServicesH2>
      <ServicesP>{description}</ServicesP>
    </ServiceCard>
  );
}

export default CardService;

const ServiceCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
