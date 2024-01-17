import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import GanekNav from "./Nav";
import Footer from "./Footer";
import {
  ContentHeader,
  Content,
  AppWrapper,
  ContentSecondaryHeader,
  PersonBlock,
} from "./layout/Layout";
import { Highlight } from "./Utils";
import { useEffect, useRef } from "react";
import { useIsMobile } from "./layout/MobileProvider";

export default function About() {
  const vidRef = useRef();
  const { isMobile } = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppWrapper>
      <Content>
        <GanekNav />

        <ContentHeader>ABOUT</ContentHeader>

        <Container
          className="mt-3 p-3"
          style={{ color: "white", pointerEvents: "auto" }}
        >
          <Row>
            <Col>
              <h3>
                Ganek Immersive Studio is located within the University of
                Southern California within the School of Cinematic Arts. Ganek
                Immersive Studio is an{" "}
                <Highlight>
                  incubator for experimentation in virtual reality, augmented
                  reality, XR, and immersive technology.
                </Highlight>
              </h3>
            </Col>
          </Row>
        </Container>

        <Container
          className="mt-4 p-3"
          style={{ color: "white", pointerEvents: "auto" }}
        >
          <Row>
            <Col>
              <h3>
                We focus on producing{" "}
                <Highlight>
                  cinematic experiences with an emphasis on strong storytelling
                  and compelling interactive experiences
                </Highlight>
                . We aim to explore technological innovation and how it can
                enhance the user experience. We employ state-of-the-art software
                and the latest in cinematic technology with the goal of training
                the next generation of interactive filmmakers.
              </h3>
            </Col>
          </Row>
        </Container>

        {/* SPACER */}
        <Container
          className="mt-3 mb-4"
          style={{ color: "white", borderBottom: "solid" }}
        ></Container>

        <ContentSecondaryHeader className="mb-5">PEOPLE</ContentSecondaryHeader>

        <Container
          className="mb-5 pb-1"
          style={{
            color: "white",
            pointerEvents: "auto",
            // borderBottom: "dashed",
          }}
        >
          <Row className="mb-5">
            <Col xl={4} lg={6} className={isMobile() ? "text-center" : ""}>
              <Image src="/images/about/David-Ganek-01.webp" width={300} />
            </Col>
            <Col>
              <Row className={isMobile() ? "text-center" : ""}>
                <h2 style={{ color: "#b1fc05" }}>
                  <b>David Ganek</b>
                </h2>
              </Row>
              <Row className={isMobile() ? "mb-4 text-center" : "mb-4"}>
                <h4>Founder</h4>
              </Row>
              <Row>
                <h4>
                  David Kent Ganek, hedge fund manager. Named one of Top 200
                  Collectors, ARTnews magazine, 2004-2008, Top Billionaire Art
                  Collectors, Forbes Magazine, 2005; recipient Investment
                  Management Division award, United Jewish Appeal-Federation New
                  York, 2008. Trustee Brunswick School Inc., Greenwich.
                </h4>
              </Row>
            </Col>
          </Row>
        </Container>

        {/* <ContentSecondaryHeader className="mb-5">STAFF</ContentSecondaryHeader> */}

        <Container className="mt-5" style={{ color: "white" }}>
          <Row>
            <Col>
              <PersonBlock
                name="Candace Reckinger"
                imagePath="/images/about/Candace-Reckinger.jpg"
                title="Creative Director"
                site="https://www.pattersonreckinger.com/"
              />
            </Col>
            <Col>
              <PersonBlock
                name="Jordan Halsey"
                imagePath="/images/about/Jordan-Halsey.jpg"
                title="Director"
                site="https://jordanhalsey.com/"
              />
            </Col>
            <Col>
              <PersonBlock
                name="Steph Ng"
                imagePath="/images/about/Steph-Ng.jpg"
                title="Lead Developer"
                site="https://steph.ng/"
              />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
              <PersonBlock
                name="Michael Brown"
                imagePath="/images/about/Michael-Overton-Brown.jpg"
                title="New Media Artist"
                site="https://www.instagram.com/michaelovertonbrown"
              />
            </Col>
            <Col>
              <PersonBlock
                name="Shengluo Zhang"
                imagePath="/images/about/Shengluo-Zhang.jpg"
                title="Studio Producer"
                site="https://shengluozhang.wixsite.com/shengluo"
              />
            </Col>
            <Col>
              <PersonBlock
                name="Olivia Siu"
                imagePath="/images/about/Olivia-Siu.jpg"
                title="Producer"
                site="https://www.oliviasiu.com/"
              />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
              <PersonBlock
                name="Nathan Fairchild"
                imagePath="/images/about/Nathan-Fairchild.jpeg"
                title="VR Filmmaker"
                site="https://www.nathan-fairchild.com/"
              />
            </Col>
          </Row>
        </Container>
      </Content>

      <Footer />
    </AppWrapper>
  );
}
