import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Navbar.css';


function BasicExample() {
  return (
    <Navbar marvel-font variant="dark" bg="danger" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">MARVEL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="/">Personajes</Nav.Link>
            <Nav.Link href="/">Comics</Nav.Link>
            {/* <NavDropdown title="Comics" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Spiderman</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dr.Strange</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Iron Man</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
