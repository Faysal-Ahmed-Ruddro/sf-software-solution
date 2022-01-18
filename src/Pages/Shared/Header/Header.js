import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <Navbar
      style={{ background: "rgba(42, 177, 255, 0.11)" }}
      className="py-2 "
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">
          <h2>
            <NavLink className="navlink_logo" to="/home">
              SF-Software-Solution
            </NavLink>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle
          className="text-white"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="navlink" to="/home">
              Home
            </NavLink>
            <NavLink className="navlink" to="/allServices">
              All Services
            </NavLink>
            <NavLink className="navlink" to="/dashboard">
              Dashboard
            </NavLink>

            {!user.email ? (
              <NavLink className="navlink" to="/login">
                Login
              </NavLink>
            ) : (
              <NavLink onClick={logOut} className="navlink" to="#">
                Log Out
              </NavLink>
            )}
          </Nav>
          <Navbar.Text className="text-black">
            Signed in as:{user?.displayName}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
