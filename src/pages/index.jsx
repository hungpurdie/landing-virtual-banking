import React, { useState } from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import HeroSection from "../components/HeroSection/HereSection";
import InfoSection from "../components/InfoSection/InfoSection";
import {
  homeObjFour,
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

Home.propTypes = {};

function Home(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBar />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Home;
