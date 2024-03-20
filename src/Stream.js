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

export default function Stream() {
  const { isMobile } = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imagePaths = [
    "/images/stream/glassShrooms.webp",
    "/images/stream/thorns5.webp",
    "/images/stream/chaos1-design.webp",
    "/images/stream/pointflowers6.jpg",
    "/images/stream/growth1.webp",
    "/images/stream/ai-fps-1.png",
    "/images/stream/ai-fps-2.png",
    "/images/stream/ai-fps-3.png",
    "/images/stream/ai-fps-4.png",
    "/images/stream/blobby1.webp",
    "/images/stream/handball.webp",
    "/images/stream/ai-blend-1.webp",
    "/images/stream/skeletal1.webp",
    "/images/stream/ai-blend-2.webp",
    "/images/stream/witness-ice.webp"
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
            <Col><BlackHighlight className="px-3">MISCELLANEOUS IMAGES, EXPERIMENTS, PROCESS</BlackHighlight></Col>
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
