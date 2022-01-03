import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top" className="navBar">
      <Container>
        <Navbar.Brand className="brand-name fs-1 p-3" href="#home">
          Crypto Watcher
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links ms-auto justify-content-space-between">
            <Nav.Link
              className="nav-link"
              href="https://www.nerdwallet.com/article/investing/cryptocurrency-7-things-to-know"
              target={"_blank"}
            >
              What's Crypto?
            </Nav.Link>
            <Nav.Link href="https://www.coindesk.com/" target={"_blank"}>
              Crypto News
            </Nav.Link>
            <Nav.Link
              href="https://www.investing.com/charts/cryptocurrency-charts"
              target={"_blank"}
            >
              Analytical Charts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
