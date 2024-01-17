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
} from "./layout/Layout";
import { useRef } from "react";
import "./layout/layout.css";

export default function Home() {
  const { isMobile, width } = useIsMobile();
  const vidRef = useRef();

  const scrollRef = useRef(null);
  const handleClick = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppWrapper>
      <Content>
        <div style={{ height: isMobile() ? "" : "100vh" }}>
          <GanekNav />

          <Container
            className="mt-3"
            style={{ color: "black", pointerEvents: "none" }}
          >
            <Row>
              <Col>
                <h1
                  style={{
                    fontSize: isMobile() ? 60 : 90,
                    color: "#b1fc05",
                    wordSpacing: "100vw",
                    mixBlendMode: "lighten",
                  }}
                >
                  <b>GANEK IMMERSIVE STUDIO</b>
                </h1>
              </Col>
            </Row>

            <Row
              className="mt-4"
              style={{ color: "white", pointerEvents: "none" }}
            >
              <Col>
                <h2 style={{ width: width() > 1200 ? "80%" : "100%" }}>
                  Explore the world of <Highlight>virtual reality</Highlight>,{" "}
                  <Highlight>augmented reality</Highlight>,{" "}
                  <Highlight>XR</Highlight>, and{" "}
                  <Highlight>immersive interactive experiences</Highlight>.
                </h2>
              </Col>
            </Row>

            <Row className="mt-5" style={{ pointerEvents: "auto" }}>
              <Col>
                <span
                  className="scroll-button px-5"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    border: "3px solid white",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                  }}
                  onClick={handleClick}
                >
                  <b>LEARN MORE</b>
                </span>
              </Col>
            </Row>
          </Container>
        </div>

        {/* SPACER */}
        <HorizontalBar className="mt-4" />

        <div ref={scrollRef}>
          <HomeContentBlock
            header="CREATE THE FUTURE"
            imagePath="/images/projects/2023/perfect-city/Perfect-City-Unreal-Engine-Virtual-Reality-Square-001.webp"
            linkText="SEE OUR PROJECTS"
            linkPath="/projects"
            textRight={false}
          >
            Drawing on the disciplines of cinema, game design, and animation,
            our team of faculty and student talent are in constant collaboration
            to innovate and subvert experiential storytelling.
          </HomeContentBlock>
        </div>

        <HomeContentBlock
          header="DISCOVER EMERGING TALENT"
          imagePath="/images/projects/2023/they-shall/TSNCB_Unreal-Engine-Virtual-Reality-Square-004.webp"
          linkText="MEET THE TEAM"
          linkPath="/about"
          textRight={true}
        >
          Housed under the USC School of Cinematic Arts, we bridge the legacies
          of cinema craftsmanship with next generations’ artistic instincts to
          create together equipped with the latest technologies of virtual and
          physical production.
        </HomeContentBlock>

        <HomeContentBlock
          header="CONNECT WITH US"
          imagePath="images/projects/2023/phantoms/tests/growth1.png"
          linkText="SUBMIT A PROPOSAL"
          linkPath="/proposals"
          textRight={false}
        >
          Accepting project proposals on a rolling basis, eligibility
          limitations apply.
        </HomeContentBlock>

        <HorizontalBar className="mt-4" />

        <Container className="px-4">
          {!isMobile() ? (
            <Row className="mt-5">
              <Col className="text-center my-auto">
                <Image
                  style={{ width: "50%" }}
                  src={"/images/logos/Unreal-Engine-Logo.svg"}
                />
              </Col>
              <Col className="text-center my-auto">
                <Image
                  style={{ width: "50%" }}
                  src={"/images/logos/Unity-Logo.png"}
                />
              </Col>
              <Col className="text-center my-auto">
                <Image
                  style={{ width: "50%" }}
                  src={"/images/logos/Houdini-Logo.png"}
                />
              </Col>
              <Col className="text-center my-auto">
                <Image
                  style={{ width: "30%" }}
                  src={"/images/logos/Epic-Games-Logo.svg"}
                />
              </Col>
            </Row>
          ) : (
            <div>
              <Row className="mt-5">
                <Col className="text-center my-auto">
                  <Image
                    style={{ width: "80%" }}
                    src={"/images/logos/Unreal-Engine-Logo.svg"}
                  />
                </Col>
                <Col className="text-center my-auto">
                  <Image
                    style={{ width: "100%" }}
                    src={"/images/logos/Unity-Logo.png"}
                  />
                </Col>
              </Row>
              <Row className="mt-5">
                <Col className="text-center my-auto">
                  <Image
                    style={{ width: "100%" }}
                    src={"/images/logos/Houdini-Logo.png"}
                  />
                </Col>
                <Col className="text-center my-auto">
                  <Image
                    style={{ width: "60%" }}
                    src={"/images/logos/Epic-Games-Logo.svg"}
                  />
                </Col>
              </Row>
            </div>
          )}

          <Row>
            <Col>
              <Image
                className="mt-5"
                width={"100%"}
                style={{ height: 250, width: "100%", objectFit: "cover" }}
                src="/images/projects/2023/phantoms/tests/thorns5.png"
              />
            </Col>
          </Row>
        </Container>
      </Content>

      <Footer />
    </AppWrapper>
  );
}
