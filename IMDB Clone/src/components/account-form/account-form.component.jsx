import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { selectCurrentUser } from "redux/user/user.selectors";

const AccountForm = () => {
  const { displayName, email } = useSelector(selectCurrentUser);
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <Form noValidate>
      <Form.Group controlId="formBasicName">
        <div className="form-info">
          <Form.Label>Name:</Form.Label>
          <Form.Control plaintext readOnly defaultValue={displayName} />
        </div>
        <Button
          type="button"
          onClick={() => history.push(`${match.url}/edit/name`)}
        >
          Edit
        </Button>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <div className="form-info">
          <Form.Label>Email:</Form.Label>
          <div className="email">{email}</div>
        </div>
        <Button
          type="button"
          onClick={() => history.push(`${match.url}/edit/email`)}
        >
          Edit
        </Button>
      </Form.Group>
      <Form.Group controlId="formBasicPass">
        <div className="form-info">
          <Form.Label>Password:</Form.Label>
          <Form.Control plaintext readOnly defaultValue="********" />
        </div>
        <Button
          type="button"
          onClick={() => history.push(`${match.url}/edit/password`)}
        >
          Edit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AccountForm;
