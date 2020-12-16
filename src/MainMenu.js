import React from "react";
import { Col, Nav, Navbar, Row } from "react-bootstrap";

export default function App() {
  return (
    <Row>
      <Col>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">TM Porträts</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Startseite</Nav.Link>
      <Nav.Link href="/galery">Galerie</Nav.Link>
      <Nav.Link href="/Order">Bestellen</Nav.Link>
      <Nav.Link href="/about">Über mich</Nav.Link>
      <Nav.Link href="/contact">Kontakt</Nav.Link>
      </Nav>
       </Navbar.Collapse>
</Navbar>
</Col>
    </Row>
  );
}
