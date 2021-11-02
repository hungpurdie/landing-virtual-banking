import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  FormContent,
  FormWrap,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  Icon,
} from "./SigninElements";

Signin.propTypes = {};

function Signin(props) {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">dolla</Icon>
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
      </FormWrap>
    </Container>
  );
}

export default Signin;
