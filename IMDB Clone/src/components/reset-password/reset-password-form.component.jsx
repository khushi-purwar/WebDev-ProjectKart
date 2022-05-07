import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { resetUserPassword } from "../../redux/user/user.actions";

const ResetPasswordForm = ({ data }) => {
  const dispatch = useDispatch();

  const [formSubmit, setFormSubmit] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Enter an email"),
    }),
    onSubmit: ({ email }) => {
      dispatch(resetUserPassword(email));
      setFormSubmit(true);
    },
  });

  if (!formSubmit) {
    return (
      <Form noValidate onSubmit={formik.handleSubmit}>
        <span className="subtitle">
          Enter the email address associated with your IMDb account, then click
          Continue.
        </span>
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
        <Button variant="primary" type="submit">
          Continue
        </Button>
      </Form>
    );
  }

  if (formSubmit) {
    return (
      <Form>
        <h3>Check your email</h3>
        <span className="subtitle">
          You will receive an email from us with instructions for resetting your
          password. If you don't receive this email, please check your junk mail
          folder.
        </span>
      </Form>
    );
  }
};

export default ResetPasswordForm;
