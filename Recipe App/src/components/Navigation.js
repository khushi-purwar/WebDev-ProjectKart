import logo from "./logo.jpg";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/search">Search Recipe</Nav.Link>
          <Nav.Link href="/aboutus">About Us</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/profile">My Profile</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
