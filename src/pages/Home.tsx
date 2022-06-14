import { useState } from 'react';
import HeroSection from '~/components/HeroSection';
import InfoSection from '~/components/InfoSection';
import NavBar from '~/components/Navbar';
import Services from '~/components/Services';
import Sidebar from '~/components/Sidebar';
import { homeObjOne, homeObjThree, homeObjTwo } from '~/mocks/infos';
import { services } from '~/mocks/services';
import Footer from '../components/Footer';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBar />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services services={services} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Home;
