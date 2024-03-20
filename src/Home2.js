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
  const {isMobile}= useIsMobile();

  return (
    <AppWrapper>
      <Content>
        {/* <GanekNav /> */}

        <Container>
          <Header />

          <Row className={isMobile() ? "mb-3" : "mb-3"}>
            <Col><BlackHighlight className="px-3">RECENT WORKS</BlackHighlight></Col>
            {/* <Col className="black-stripes" /> */}
          </Row>

          <Row>
            <Col>
              <Row>
                <Col>
                  <ProjectBanner
                    title="WE BECOME SOMETHING ELSE"
                    imagePath="/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-Square.webp"
                    details="VR INTERACTIVE ANIMATION"
                    path="/we-become-something-else"
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <ProjectBanner
                    title="PERFECT WORLD"
                    imagePath="/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-1.webp"
                    details="3D PLATFORMER ARTGAME"
                    path="/perfect-world"
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <ProjectBanner
                    title="METASTASIS"
                    imagePath="/images/projects/metastasis/Metastasis-Unreal-Engine-Michael-Overton-Brown-1.webp"
                    details="3D ANIMATION"
                    path="/metastasis"
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col lg={3}><BlackHighlight className="px-3">OLDER WORKS</BlackHighlight></Col>
                {/* <Col className="black-stripes" /> */}
              </Row>

              <Row>
                <Col>
                  <ProjectBanner
                    title="CORNHUB.NEWS"
                    imagePath="/images/projects/cornhub/Cornhub-2.png"
                    details="ANTI-WEBSITE"
                    path="https://cornhub.news"
                    external={true}
                  />
                </Col>
                <Col>
                  <ProjectBanner
                    title="DOUBLE/STAR"
                    imagePath="/images/projects/double-star/Double-Star-Unreal-Engine.webp"
                    details="EXPERIMENTAL EXPLORATION GAME"
                    path="/double-star"
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <ProjectBanner
                    title="SR388"
                    imagePath="/images/projects/music/Michael-Overton-Brown-SR388.png"
                    details="MUSIC"
                    path="https://michaelovertonbrown.bandcamp.com/album/witness-sr-388"
                    external={true}
                  />
                </Col>
                <Col>
                  <ProjectBanner
                    title="MASS"
                    imagePath="/images/projects/mass/Mass-Unity-Game-1.webp"
                    details="INTERACTIVE MUSIC SPACE"
                    path="/mass"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Footer />
        </Container>
      </Content>
    </AppWrapper>
  );
}
