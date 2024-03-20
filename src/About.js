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
import { Link } from "react-router-dom";

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
                path="/images/about/Michael-Overton-Brown.webp"
              />
            </Col>
            <Col>
              <div style={{ border: "dashed", height: "100%" }} className="p-2">
                <Row>
                  <Col>
                    I am a new media artist, technologist, and interaction
                    designer currently pursuring an MFA in interactive media at
                    USC's School of Cinematic Arts. I work with game engines and
                    procedural tools to co-create with machines.
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="https://www.instagram.com/michaelovertonbrown"
                      target="_blank"
                    >
                      <span className="header-name">INSTAGRAM</span>
                    </Link>{" "}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="https://phasein.itch.io/"
                      target="_blank"
                    >
                      <span className="header-name">ITCH.IO</span>
                    </Link>{" "}
                  </Col>
                </Row>
                <Row>
                  <Col><span className="header-name">EMAIL</span>: M.OVERTONBROWN AT GMAIL.COM</Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className={isMobile() ? "mt-2" : "mt-3"}>
            <Col className={isMobile() ? "mb-2" : ""}>
              <div>
                <Row>
                  <Col><BlackHighlight className="px-3">ARTIST STATEMENT</BlackHighlight></Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    My practice stems from a fascination
                    with systems and our inability to truly know them. Every
                    day, each of us engages with myriad social, economic, and
                    technological systems, but do we really understand them? So
                    too for computers, which largely mediate our digitized,
                    systemic world: can a single person truly comprehend the
                    mechanics of these machines in their entirety? As I write
                    code, do I understand the compiled binary? Do I know where
                    my code exists in a computer chip? Do I know how the physics
                    of silicon allows my code to be executed? In the complexity
                    of modern computers, we have created systems that are
                    theoretically fully comprehensible, but practically
                    incomprehensible for a single person. In their complexity,
                    computers and machines take on an unexpected life of their
                    own. They can surprise us, intrigue us, and delight us. They
                    can be our co-creators.
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col>
                    In my work, I use game engines, procedural tools, and
                    interactivity to form a relationship with computers and
                    machines. I approach my work experimentally: I design
                    systems, structures, and networks with large possibility
                    spaces, and I probe this possibility space for intriguing,
                    emotional, or unexpected results. I surf the machine. This
                    oscillation between technical design and experimental
                    discovery creates an oscillation between my conscious and
                    subconscious selves. Rapidly and subconsciously modulating
                    the machine is a kind of technological automatism and forces
                    me to ask myself: “Why was that permutation resonant?” By
                    creating and exploring a system of sufficient complexity,
                    the machine can teach us about ourselves.
                  </Col>
                </Row>
                <Row className="mt-3 mb-3">
                  <Col>
                    There is also a comfort here: as a bulwark against the
                    infinite regression of unknowability of our modern world,
                    these systems provide an oasis of controlled
                    unpredictability. Despite not grasping the full capacity of
                    the systems that I create, I can at least understand the
                    boundaries of the design space. For me, this provides a
                    degree of relief and certainty in an increasingly uncertain
                    world. I want my work to provide a safe haven and controlled
                    environment from which we can look out and explore questions
                    about the systems of our world.
                  </Col>
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
