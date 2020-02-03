import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Song App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/"> Home</Link>
            <Link to="/pages/library"> Library</Link>
            <Link to="/pages/search"> Search </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Sidebar;
