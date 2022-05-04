import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditEmailForm = ({ formik, currentUser }) => (
  <Form noValidate onSubmit={formik.handleSubmit}>
    <span className="subtitle">
      Use the form below to change the e-mail address for your IMDb account. Use
      the new address next time you log in. If you don’t know your password you
      can reset it {<Link to="/account/reset-password">here</Link>}.
    </span>
    <Form.Group controlId="formBasicOldEmail">
      <Form.Label>Old email address:</Form.Label>
      <Form.Control
        type="email"
        plaintext
        readOnly
        defaultValue={currentUser.email}
      />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>New email address:</Form.Label>
      <Form.Control
        type="email"
        {...formik.getFieldProps("email")}
        isInvalid={formik.touched.email && formik.errors.email}
      />
      <Form.Control.Feedback type="invalid">
        {formik.errors.email}
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group controlId="formBasicEmailVerify">
      <Form.Label>Re-enter email address:</Form.Label>
      <Form.Control
        type="email"
        {...formik.getFieldProps("emailVerify")}
        isInvalid={formik.touched.emailVerify && formik.errors.emailVerify}
      />
      <Form.Control.Feedback type="invalid">
        {formik.errors.emailVerify}
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password:</Form.Label>
      <Form.Control
        type="password"
        name="password"
        {...formik.getFieldProps("password")}
        isInvalid={formik.touched.password && formik.errors.password}
      />
      <Form.Control.Feedback type="invalid">
        {formik.errors.password}
      </Form.Control.Feedback>
    </Form.Group>
    <Button variant="primary" type="submit">
      Save changes
    </Button>
  </Form>
);

export default EditEmailForm;
