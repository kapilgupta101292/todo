import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const HeaderComponent = () => {
  return (
    <>
      <Navbar expand="sm" bg="dark" variant="dark" sticky="top">
        <LinkContainer to="/welcome/kapil">
          <Navbar.Brand>Navbar</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <LinkContainer to="/welcome/kapil">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/todos">
                <Nav.Link>todos</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Item>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/logout">
                <Nav.Link>Logout</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HeaderComponent;
