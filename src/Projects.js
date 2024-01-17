import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GanekNav from "./Nav";
import Footer from "./Footer";
import Image from "react-bootstrap/Image";
import { Highlight } from "./Utils";
import {
  ContentHeader,
  Content,
  AppWrapper,
  PageButton,
} from "./layout/Layout";
import { ProjectContainer } from "./layout/Layout";
import { useEffect } from "react";
import { useIsMobile } from "./layout/MobileProvider";

export default function Projects() {
  const { isMobile } = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppWrapper>
      <Content>
        <GanekNav />

        <ContentHeader>PROJECTS</ContentHeader>

        <Container
          className="mt-3 p-3"
          style={{ color: "white", pointerEvents: "auto" }}
        >
          <Row>
            <Col>
              <h3>
                We are the University of Southern California’s premier
                cross-platform incubator for experimentation in VR, AR, XR,
                immersive technology, and experiential storytelling. At our
                core,{" "}
                <Highlight>
                  we seek to produce cinematic experiences with a focused
                  narrative and compelling interactivity.
                </Highlight>
              </h3>
            </Col>
          </Row>
        </Container>

        <div
          className="mt-4"
          style={{
            // height: "100px",
            pointerEvents: "none",
            // display: isMobile() ? "none" : "",
            color: "white",
            borderBottom: "solid",
          }}
        ></div>

        <ProjectContainer
          className="mt-4 mb-4"
          title="They Shall Not Come Back"
          creator="Seleny Xie"
          imagePath="/images/projects/2023/they-shall/TSNCB_Unreal-Engine-Virtual-Reality-Square-001.webp"
          path="/projects/they-shall-not-come-back-virtual-reality"
          learnMore={true}
        >
          A narrative VR interactive experience that enables the player to
          embody a young soldier's soul from WWI, endeavoring to reunite with
          his NYC family for a final farewell. Traversing from war's reality to
          afterlife's ethereality, you embark on a moving journey, exploring
          timeless bonds and love that transcends mortality.
        </ProjectContainer>

        <ProjectContainer
          className="mt-4 mb-4"
          title="Perfect City: The Room"
          creator="Shengwei Zhou"
          imagePath="/images/projects/2023/perfect-city/Perfect-City-Unreal-Engine-Virtual-Reality-Square-002.webp"
          path="/projects/perfect-city-unreal-engine"
          learnMore={true}
        >
          One of the episodes in the Perfect City series. Perfect City: The Room
          is a VR piece that explores the mental textures of a woman’s dreams
          and memories, inviting the audience to feel the different textures in
          this “room” inside her mind.
        </ProjectContainer>

        {/* <ProjectContainer
          className="mt-4 mb-3"
          title="EMBODIMENTS"
          creator="Michael Overton Brown"
          imagePath="images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-Square.png"
          path="/projects/embodiments-virtual-reality"
          learnMore={true}
        >
          EMBODIMENTS is a line of inquiry and a system for exploring the
          emotions and questions that arise when we strengthen the connection to
          our digital bodies, our phantom selves.
        </ProjectContainer> */}

        {/* MICHAEL CUSTOM SECTION */}
        <Container
          className={"mt-4 mb-3 px-4 pt-4 pb-5"}
          style={{
            color: "white",
            pointerEvents: "auto",
            borderBottom: "solid",
          }}
        >
          <Row>
            <Col lg={6}>
              <h2>
                <Highlight>EMBODIMENTS</Highlight>
              </h2>
              <h3>Michael Overton Brown</h3>
              <h4>
              <a
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "#b1fc05",
                    pointerEvents: "auto",
                  }}
                  href="https://www.instagram.com/michaelovertonbrown"
                >
                  Instagram
                </a>
                {" | "}
                <a
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "#b1fc05",
                    pointerEvents: "auto",
                  }}
                  href="https://michaelovertonbrown.com"
                >
                  Website
                </a>
              </h4>
              <h4 className="mt-4">
                <Row>
                  <Col>
                    EMBODIMENTS is a system of works that explores the questions
                    and emotions that arise as we{" "}
                    <Highlight>
                      probe the relationship between our physical and digital
                      bodies.
                    </Highlight>
                  </Col>
                </Row>

                <Row className={isMobile() ? "mt-4 mb-4" : "mt-5"}>
                  <Col>
                    <PageButton path="/projects/we-become-something-else-unreal-engine">
                      EMBODIMENT I
                    </PageButton>
                  </Col>
                </Row>

                {/* <Row className={isMobile() ? "mt-2 mb-4" : "mt-4"}>
                  <Col>
                    <PageButton path="/path">EMBODIMENT II</PageButton>
                  </Col>
                </Row> */}
              </h4>
            </Col>
            <Col>
              <Image
                style={{ objectFit: "cover" }}
                width={"100%"}
                src="images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-Square.png"
              />
            </Col>
          </Row>
        </Container>
        {/* END MICHAEL CUSTOM SECTION */}

        <ProjectContainer
          className="mt-4 mb-3"
          title="Help is on the Way"
          creator="Nathan Fairchild"
          imagePath="/images/projects/2023/help-on-way/HelpIsOnTheWay_1X1_001.webp"
        >
          An experiment in building suspense in VR. Walking through town at
          night, Flora Chapman is followed by a mysterious threatening presence.
          Viewers will move back and forth between the perspectives of Flora and
          her pursuer.
        </ProjectContainer>

        <ProjectContainer
          className="mt-4 mb-3"
          noBorder={true}
          title="O.R.A.C.L.E."
          creator="Rylan Pozniak"
          imagePath="/images/projects/2023/oracle/oracle1-square.jpg"
        >
          An experiment in building suspense in VR. Walking through town at
          night, Flora Chapman is followed by a mysterious threatening presence.
          Viewers will move back and forth between the perspectives of Flora and
          her pursuer.
        </ProjectContainer>
      </Content>

      <Footer />
    </AppWrapper>
  );
}
