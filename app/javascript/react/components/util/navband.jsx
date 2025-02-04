import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navband() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <span className="material-symbols-outlined">eye_tracking</span>{' '}
          OCR App
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navband;
