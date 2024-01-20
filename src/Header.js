import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useIsMobile } from "./layout/MobileProvider";
import { Highlight } from "./Utils";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { isMobile } = useIsMobile();
  const location = useLocation();

  return (
    <div style={{ borderBottom: "DASHED" }} className={isMobile() ? "mb-3 mt-4" : "mb-4 mt-4"}>
      <Row>
        <Col lg={9}>
          <Link style={{ textDecoration: "none" }} to="/">
            <span className="header-name" style={{ fontSize: 25 }}>
              MICHAEL OVERTON BROWN
            </span>
          </Link>{" "}
          {location.pathname !== "/" && !isMobile() ? (
            <Link style={{ textDecoration: "none" }} to="/">
              <span className="header-name"> ←RETURN</span>
            </Link>
          ) : null}
        </Col>

        <Col className="text-end">
          {location.pathname !== "/" && isMobile() ? (
            <Link style={{ textDecoration: "none" }} to="/">
              <span className="header-name"> ←RETURN</span>
            </Link>
          ) : null}{" "}
          <Link style={{ textDecoration: "none" }} to="/stream">
            <span className="header-name">STREAM</span>
          </Link>{" "}
          <Link style={{ textDecoration: "none" }} to="/about">
            <span className="header-name">ABOUT</span>
          </Link>{" "}
        </Col>
      </Row>

      <Row className={isMobile() ? "d-none" : ""}>
        <span>NEW MEDIA ARTIST | TECHNOLOGIST | INTERACTION DESIGNER</span>
      </Row>
    </div>
  );
}
