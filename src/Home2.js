import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GanekNav from "./Nav";
import Footer from "./Footer";
import { Highlight } from "./Utils";
import Image from "react-bootstrap/Image";
import { useIsMobile } from "./layout/MobileProvider";
import {
  Content,
  AppWrapper,
  HorizontalBar,
  HomeContentBlock,
  ProjectBanner,
} from "./layout/Layout";
import { useRef, useState } from "react";
import "./layout/layout.css";

export default function Home2() {
  const { isMobile, width } = useIsMobile();
  const [hover, setHover] = useState(false);

  // const scrollRef = useRef(null);
  // const handleClick = () => {
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <AppWrapper>
      <Content>
        <GanekNav />

        <Container style={{ color: "black" }}>
          {/* <Row style={{ color: "black", fontSize: 25 }}>
            <Col>MICHAEL OVERTON BROWN</Col>
          </Row> */}

          <Row className="mb-3">
            <Col>RECENT WORKS</Col>
          </Row>

          <Row>
            <Col lg={9}>
              <Row>
                <Col>
                  <ProjectBanner
                    title="We Become Something Else"
                    imagePath="/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-Square.png"
                    details="VR INTERACTIVE ANIMATION"
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <ProjectBanner
                    title="Perfect World"
                    imagePath="/images/projects/perfect-world/Perfect-World-Unity-Game-1.png"
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <ProjectBanner
                    title="Metastasis"
                    imagePath="/images/projects/metastasis/Metastasis-Unreal-Engine-Michael-Overton-Brown-1.png"
                  />
                </Col>
              </Row>

              <Row className="mb-3 mt-3">
            <Col>OLDER WORKS</Col>
          </Row>

              <Row  className="gx-0">
                <Col>
                  <ProjectBanner
                    title="cornhub.news"
                    imagePath="/images/projects/cornhub/Cornhub-1.png"
                  />
                </Col>
                <Col>
                  <ProjectBanner
                    title="Double Star"
                    imagePath="/images/projects/double-star/Double-Star-Unreal-Engine.png"
                  />
                </Col>
              </Row>
            </Col>

            <Col>
              <Row style={{ color: "black", fontSize: 15 }} className="mb-4">
                <Col>
                  MICHAEL IS A NEW MEDIA ARTIST, TECHNOLOGIST, AND INTERACTION
                  DESIGNER CURRENTLY PURSUING AN MFA IN INTERACTIVE MEDIA AT THE
                  UNIVERSITY OF SOUTHERN CALIFORNIA.
                </Col>
              </Row>
              <Row>
                <Image src="/images/about/Michael-Overton-Brown.jpg" />
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Content>

      
    </AppWrapper>
  );
}
