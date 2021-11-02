import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

SigninForm.propTypes = {};

function SigninForm(props) {
  return (
    <FormContent>
      <Form action="#">
        <FormH1>Sign in to your account</FormH1>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput type="email" required />
        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput type="password" required />
        <FormButton type="submit">Continue</FormButton>
        <Text>Forgot password</Text>
      </Form>
    </FormContent>
  );
}

export default SigninForm;

const FormContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const Form = styled.form`
  background-color: #010101;
  max-width: 400px;
  width: 100%;
  height: auto;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 400px) {
    padding: 32px;
  }
`;

const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #ffffff;
`;

const FormInput = styled.input`
  padding: 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  outline: none;
`;

const FormButton = styled.button`
  background-color: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
