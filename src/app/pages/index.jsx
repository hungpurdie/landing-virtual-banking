import React, { useState } from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";

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
