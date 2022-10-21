import React from "react";
import "../css/Navbar.css";
import { Navbar, Nav, Image } from 'react-bootstrap';


const NavbarMain = () => {
  return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="navbar-brand" href="/home">
          <Image src="/images/other/MLBlogo.png" rounded />
          MLB Player Data
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Search">Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      </>
    );
  };


export default NavbarMain;