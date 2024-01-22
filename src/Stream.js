import "./App.css";
import Footer from "./Footer";
import { Content, AppWrapper, ProjectPage } from "./layout/Layout";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import { Row, Col } from "react-bootstrap";
import { useIsMobile } from "./layout/MobileProvider";
import { ModalImage } from "./layout/Layout";

export default function Stream() {
  const { isMobile } = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imagePaths = [
    "/images/stream/thorns5.png",
    "/images/stream/chaos1-design.png",
    "/images/stream/pointflowers2.png",
    "/images/stream/growth1.png",
    "/images/stream/blobby1.png",
    "/images/stream/handball.png",
    "/images/stream/ai-blend-1.png",
    "/images/stream/skeletal1.png",
    "/images/stream/ai-blend-2.png",
    "/images/stream/witness-ice.png"
  ];
  const imagePerRow = isMobile() ? 2 : 3;

  let rows = [];
  for (let i = 0; i < imagePaths.length; i += imagePerRow) {
    rows.push(imagePaths.slice(i, i + imagePerRow));
  }

  let remainder = [];
  if (imagePaths.length % imagePerRow != 0) {
    for (let i = 0; i < imagePerRow - (imagePaths.length % imagePerRow); i++) {
      remainder.push(i);
    }
  }

  console.log(remainder);

  return (
    <AppWrapper>
      <Content>
        <Container>
          <Header />

          <Row className={isMobile() ? "mb-3" : "mb-3"}>
            <Col>MISCELLANEOUS IMAGES, EXPERIMENTS, PROCESS</Col>
            {/* <Col className="black-stripes" /> */}
          </Row>

          {rows.map((row, rowIndex) => (
            <Row key={rowIndex} className={isMobile() ? "mt-2" : "mt-3"}>
              {row.map((path, colIndex) => (
                <Col key={colIndex}>
                  <ModalImage path={path} />
                </Col>
              ))}
              {rowIndex == rows.length - 1 && imagePaths.length % imagePerRow != 0
                ? remainder.map((col, colIndex) => (
                    <Col key={colIndex}>&nbsp;</Col>
                  ))
                : null}
            </Row>
          ))}

          <Footer />
        </Container>
      </Content>
    </AppWrapper>
  );
}
