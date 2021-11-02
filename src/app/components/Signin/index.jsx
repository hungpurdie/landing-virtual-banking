import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import SigninForm from "./SigninForm";
import styled from "styled-components";

Signin.propTypes = {};

function Signin(props) {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">dolla</Icon>
        <SigninForm />
      </FormWrap>
    </Container>
  );
}

export default Signin;

const Container = styled.div`
  min-height: 692px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-right: 8px;
  }
`;
