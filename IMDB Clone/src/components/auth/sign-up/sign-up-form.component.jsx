import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { signUpStart } from "../../../redux/user/user.actions";

const SignUpForm = ({ signUpStart }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Please enter a valid name")
        .required("Enter your name"),
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Enter an email"),
      password: Yup.string().min(8, null).required("Enter a password"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: ({ name, email, password }) => {
      signUpStart({ email, password, name });
    },
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <span className="title"> Create account</span>
      <Form.Group controlId="formBasicName">
        <Form.Label>Your name</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("name")}
          isInvalid={formik.touched.name && formik.errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          {...formik.getFieldProps("email")}
          isInvalid={formik.touched.email && formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="at least 8 characters"
          {...formik.getFieldProps("password")}
          isInvalid={formik.touched.password && formik.errors.password}
        />
        <Form.Text className="text-muted">
          Password must be at least 8 characters.
        </Form.Text>
        <Form.Control.Feedback type="invalid">
          {formik.errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicVerifyPassword">
        <Form.Label>Re-enter Password</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          {...formik.getFieldProps("confirmPassword")}
          isInvalid={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.confirmPassword}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Create your IMDb account
      </Button>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUpForm);
