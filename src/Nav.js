import "./App.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useIsMobile } from "./layout/MobileProvider";

export default function GanekNav() {
  const location = useLocation();
  const [hoverLink, setHoverLink] = useState("");
  const { isMobile } = useIsMobile();

  return (
    <div className="mb-4">
      <Navbar
        expand="lg"
        style={{ background: "white", pointerEvents: "auto" }}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{fontSize: isMobile() ? 16 : 20}}
          >
            GANEK IMMERSIVE STUDIO
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/about"
                onMouseEnter={() => setHoverLink("about")}
                onMouseLeave={() => setHoverLink("")}
                style={
                  location.pathname === "/about" || hoverLink == "about"
                    ? { background: "#b1fc05" }
                    : {}
                }
              >
                ABOUT
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/projects"
                onMouseEnter={() => setHoverLink("projects")}
                onMouseLeave={() => setHoverLink("")}
                style={
                  location.pathname === "/projects" || hoverLink == "projects"
                    ? { background: "#b1fc05" }
                    : {}
                }
              >
                PROJECTS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
