import React from "react";
import { Card,Container } from "react-bootstrap";
import logo from "./logo.jpg";

const AboutUs = () => {
  return (
    <>
      <Container>
        <Card >
          <Card.Img variant="top" src={logo} width="50" height="430" />
          <Card.Body>
            <Card.Title>Recipe PWA App</Card.Title>
            <Card.Text>
              Welcome to the Recipe App where you can get details of recipes and ingredients of your favourite food items.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default AboutUs;
