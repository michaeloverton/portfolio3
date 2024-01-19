import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useIsMobile } from "./layout/MobileProvider";
import { Highlight } from "./Utils";
import { Link } from "react-router-dom";

export default function Header() {
  const { isMobile } = useIsMobile();

  return (
    <div style={{borderBottom: "DASHED"}} className="mb-4 mt-4">
      <Row >
        <Col>
          <Link style={{textDecoration: "none"}} to="/home2"><span style={{ fontSize: 25, color: "black" }}>MICHAEL OVERTON BROWN</span></Link>
        </Col>
        {/* <Col className="black-stripes"></Col> */}
        {/* <Col className="text-end">ABOUT</Col> */}
        {/* <Col lg={3} /> */}
      </Row>
      <Row>
        <span>NEW MEDIA ARTIST | TECHNOLOGIST | INTERACTION DESIGNER</span>
      </Row>
    </div>
  );
}
