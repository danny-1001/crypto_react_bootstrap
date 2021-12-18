import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand className="fs-1 p-3" href="#home">
          Crypto Watcher
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links ms-auto justify-content-space-between">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="https://www.coindesk.com/">News</Nav.Link>
            <Nav.Link href="#questions">Questions</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
