import "../App.css";
import GanekNav from "../Nav";
import Footer from "../Footer";
import { Content, AppWrapper, ProjectPage, ModalImage } from "../layout/Layout";
import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Header from "../Header";
import { Modal, Button } from "react-bootstrap";
import {
  BlackDashedHighlight,
  BlackHighlight,
  BlackSolidHighlight,
  MidSize,
} from "../Utils";
import { useIsMobile } from "../layout/MobileProvider";

export default function WeBecomeSomethingElse() {
  const { isMobile } = useIsMobile();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppWrapper>
      <Content>
        <Container>
          <Header />

          <Row>
            <Col>
              <MidSize>
                <BlackHighlight className="px-3">
                  WE BECOME SOMETHING ELSE
                </BlackHighlight>
              </MidSize>
            </Col>
          </Row>

          <Row>
            <Col>
              <Image
                style={{
                  height: 300,
                  width: "100%",
                  objectFit: "cover",
                  pointerEvents: "auto",
                }}
                src="/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-11.png"
              />
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <div style={{ border: "dashed", height: "100%" }} className="p-2">
                <Row>
                  <Col>
                    <BlackHighlight>DESCRIPTION:</BlackHighlight> Lorem ipsum
                    lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem
                    ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem
                    ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem
                    ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem
                    ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem
                    ipsumLorem ipsum lorem ipsum
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <BlackHighlight>TECHNOLOGY:</BlackHighlight> UNREAL ENGINE
                    5, HOUDINI, FMOD
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              {/* <Image
                style={{ objectFit: "cover" }}
                width={"100%"}
                src="/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-Square.png"
              /> */}
              <ModalImage path="/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-Square.png" />
            </Col>
          </Row>

          <Row className={isMobile() ? "mt-2" : "mt-3"}>
            <Col>
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  pointerEvents: "auto",
                }}
                src={
                  "/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-8.png"
                }
              />
            </Col>
          </Row>

          <Row className={isMobile() ? "mt-2" : "mt-3"}>
            <Col>
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  pointerEvents: "auto",
                }}
                src={
                  "/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-12.png"
                }
              />
            </Col>
          </Row>

          <ModalImage className="mt-3" path="/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-12.png" />

          {/* <ProjectPage
            title="EMBODIMENT I: We Become Something Else"
            creator="Michael Overton Brown"
            tags={[
              "Virtual Reality",
              "Unreal Engine",
              "Interactive Filmic Experience",
            ]}
            bannerPath="/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-11.png"
            descriptionImagePath="/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-Square.png"
            primaryImagePaths={[
              "/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-12.png",
              "/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-8.png",
              "/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-4.png",
            ]}
            subImagePaths={[
              "/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-6.png",
              "/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-9-Square.png",
              "/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-2.png",
            ]}
          >
            Examines the horror and beauty of having a physical existence. The
            chaos of having a body.
          </ProjectPage> */}
        </Container>

        <Footer />
      </Content>
    </AppWrapper>
  );
}
