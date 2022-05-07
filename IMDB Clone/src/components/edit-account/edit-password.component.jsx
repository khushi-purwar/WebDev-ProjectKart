import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditPasswordForm = ({ formik }) => (
  <Form noValidate onSubmit={formik.handleSubmit}>
    <span className="subtitle">
      Use the form below to change the password for your IMDb account. If you
      forgot your password you can reset it{" "}
      {<Link to="/account/reset-password">here</Link>}.
    </span>
    <Form.Group controlId="formCurrentPassword">
      <Form.Label>Current password:</Form.Label>
      <Form.Control
        type="password"
        name="currentPassword"
        {...formik.getFieldProps("currentPassword")}
        isInvalid={
          formik.touched.currentPassword && formik.errors.currentPassword
        }
      />
      <Form.Control.Feedback type="invalid">
        {formik.errors.currentPassword}
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group controlId="formNewPassword">
      <Form.Label>New password:</Form.Label>
      <Form.Control
        type="password"
        name="newPassword"
        {...formik.getFieldProps("newPassword")}
        isInvalid={formik.touched.newPassword && formik.errors.newPassword}
      />
      <Form.Control.Feedback type="invalid">
        {formik.errors.newPassword}
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group controlId="formReenterPassword">
      <Form.Label>Re-enter new assword:</Form.Label>
      <Form.Control
        type="password"
        name="reEnterPassword"
        {...formik.getFieldProps("reEnterPassword")}
        isInvalid={
          formik.touched.reEnterPassword && formik.errors.reEnterPassword
        }
      />
      <Form.Control.Feedback type="invalid">
        {formik.errors.reEnterPassword}
      </Form.Control.Feedback>
    </Form.Group>
    <Button variant="primary" type="submit">
      Save changes
    </Button>
  </Form>
);

export default EditPasswordForm;
