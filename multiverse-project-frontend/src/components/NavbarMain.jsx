import React, { useContext } from "react";
import "../css/Navbar.css";
import { Navbar, Nav, Image } from 'react-bootstrap';
import { ThemeContext } from './ThemeProvider';


const NavbarMain = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
            <button
              onClick={()=> toggleTheme(theme)}
              className='btn btn-primary'>
              {theme == "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      </>
    );
  };


export default NavbarMain;