import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useIsMobile } from "./layout/MobileProvider";
import { Highlight } from "./Utils";

export default function Home() {
  const { isMobile } = useIsMobile();

  return (
    <div>
      <Container
        className="mt-5 mb-5"
        style={{ color: "black", borderTop: "solid" }}
      >
        <Row>
          <Col className="my-auto">
            <div style={{ fontSize: isMobile() ? "16px" : "25px" }}>
              © MICHAEL OVERTON BROWN {new Date().getFullYear()}
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">&nbsp;</Container>
    </div>
  );
}
