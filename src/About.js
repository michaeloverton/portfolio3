import "./App.css";
import Footer from "./Footer";
import { Content, AppWrapper, ProjectPage } from "./layout/Layout";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import { Row, Col } from "react-bootstrap";
import { useIsMobile } from "./layout/MobileProvider";
import { ModalImage } from "./layout/Layout";
import { BlackHighlight } from "./Utils";

export default function About() {
  const { isMobile } = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppWrapper>
      <Content>
        <Container>
          <Header />

          <Row className={isMobile() ? "mt-2" : "mt-3"}>
            <Col lg={6} className={isMobile() ? "mb-2" : ""}>
              <ModalImage
                size="md"
                path="/images/about/Michael-Overton-Brown.jpg"
              />
            </Col>
            <Col>
              <div style={{ border: "dashed", height: "100%" }} className="p-2">
                <Row>
                  <Col>
                    I am a new media artist, technologist, and interaction
                    designer currently pursuring an MFA in interactive media at
                    USC's School of Cinematic Arts.
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>ARTIST STATEMENT TBD...</Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Footer />
        </Container>
      </Content>
    </AppWrapper>
  );
}
