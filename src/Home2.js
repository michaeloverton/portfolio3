import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GanekNav from "./Nav";
import Footer from "./Footer";
import { BlackHighlight, Highlight } from "./Utils";
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
import Header from "./Header";

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
        {/* <GanekNav /> */}

        <Container>
          <Header />

          <Row className="mb-3">
            <Col>RECENT WORKS</Col>
            {/* <Col className="black-stripes" /> */}
          </Row>

          <Row>
            <Col>
              <Row>
                <Col>
                  <ProjectBanner
                    title="WE BECOME SOMETHING ELSE"
                    imagePath="/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-Square.png"
                    details="VR INTERACTIVE ANIMATION"
                    path="/we-become-something-else"
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <ProjectBanner
                    title="PERFECT WORLD"
                    imagePath="/images/projects/perfect-world/Perfect-World-Unity-Game-1.png"
                    details="3D PLATFORMER ARTGAME"
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <ProjectBanner
                    title="METASTASIS"
                    imagePath="/images/projects/metastasis/Metastasis-Unreal-Engine-Michael-Overton-Brown-1.png"
                    details="3D ANIMATION"
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col lg={3}>OLDER WORKS</Col>
                {/* <Col className="black-stripes" /> */}
              </Row>

              <Row>
                <Col>
                  <ProjectBanner
                    title="CORNHUB.NEWS"
                    imagePath="/images/projects/cornhub/Cornhub-1.png"
                    details="ANTI-WEBSITE"
                  />
                </Col>
                <Col>
                  <ProjectBanner
                    title="DOUBLE STAR"
                    imagePath="/images/projects/double-star/Double-Star-Unreal-Engine.png"
                    details="EXPERIMENTAL EXPLORATION GAME"
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <ProjectBanner
                    title="SR388"
                    imagePath="/images/projects/music/Michael-Overton-Brown-SR388.png"
                    details="MUSIC"
                  />
                </Col>
                <Col></Col>
              </Row>
            </Col>

            {/* <Col>
              <Row
                style={{ color: "black", border: "dashed" }}
                className="mb-4 p-2"
              >
                <Col>
                  MICHAEL IS A NEW MEDIA ARTIST, TECHNOLOGIST, AND INTERACTION
                  DESIGNER CURRENTLY PURSUING AN MFA IN INTERACTIVE MEDIA AT THE
                  UNIVERSITY OF SOUTHERN CALIFORNIA.
                </Col>
              </Row>
            </Col> */}
          </Row>
        </Container>

        <Footer />
      </Content>
    </AppWrapper>
  );
}
