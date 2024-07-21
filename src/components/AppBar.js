import React from 'react'
import { useState } from 'react';
import {Navbar, Nav,Container,Button} from 'react-bootstrap';
import FormModalBar from './FormModalBar';

function AppBar() {

    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">E-com Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link > <Button variant="primary" onClick={handleShow}> Login    </Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <FormModalBar  show={showModal} handleClose={handleClose} />
    </>
  );
}



export default AppBar;