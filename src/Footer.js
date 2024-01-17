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
        className="mt-5"
        style={{ color: "white", borderTop: "solid" }}
      >
        <Row>
          <Col className="my-auto">
            <div style={{ fontSize: isMobile() ? "16px" : "25px" }}>
              © GANEK IMMERSIVE STUDIO {new Date().getFullYear()}
            </div>
            <div
              style={{
                fontSize: isMobile() ? "11px" : "15px",
                pointerEvents: "auto",
              }}
            >
              Website by{" "}
              <Highlight>
                <a
                  href="https://www.instagram.com/michaelovertonbrown"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#b1fc05" }}
                >
                  Michael Overton Brown
                </a>
              </Highlight>
            </div>
          </Col>
        </Row>
        {/* <Row><Col>Privacy Policy | Terms of Service | Cookie Policy</Col></Row> */}
      </Container>

      <Container className="mt-4">.</Container>
    </div>
  );
}
