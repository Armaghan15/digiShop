import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">DigiShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ml-auto"
              style={{ maxHeight: "100px", marginLeft: "auto" }}
              navbarScroll
            >
              <Nav.Link style={{ marginRight: "10px" }} href="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
