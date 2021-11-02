import React from "react";
import PropTypes from "prop-types";
import Signin from "../components/Signin";
import ScrollToTop from "../components/ScrollToTop";

SigninPage.propTypes = {};

function SigninPage(props) {
  return (
    <>
      <ScrollToTop />
      <Signin />
    </>
  );
}

export default SigninPage;
