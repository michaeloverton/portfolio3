import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useIsMobile } from "./MobileProvider";
import Image from "react-bootstrap/Image";
import { Highlight } from "../Utils";
import { Link } from "react-router-dom";
import "./layout.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "../App.css";
import { MidSize, BlackHighlight } from "../Utils";

export function ContentHeader(props) {
  const { isMobile } = useIsMobile();

  return (
    <Container
      className="mb-4"
      style={{ color: "black", pointerEvents: "auto" }}
    >
      <Row>
        <Col>
          <h1 style={{ fontSize: isMobile() ? 50 : 80, color: "#b1fc05" }}>
            <b>{props.children}</b>
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export function ContentSecondaryHeader(props) {
  const { isMobile } = useIsMobile();

  return (
    <Container
      className="mb-4"
      style={{ color: "black", pointerEvents: "auto" }}
    >
      <Row>
        <Col>
          <h1 style={{ fontSize: isMobile() ? 30 : 60, color: "#b1fc05" }}>
            <b>{props.children}</b>
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export function Content(props) {
  const { isMobile } = useIsMobile();

  return (
    <Container
      className="mx-auto"
      style={{ width: isMobile() ? "100%" : "75%" }}
    >
      {props.children}
    </Container>
  );
}

export function AppWrapper(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        // pointerEvents: "none",
      }}
      className="App"
    >
      {props.children}
    </div>
  );
}

export function ProjectContainer(props) {
  const { isMobile } = useIsMobile();

  return (
    <Container
      className={props.className + " px-4 pt-4 pb-5"}
      style={{
        color: "white",
        pointerEvents: "auto",
        borderBottom: props.noBorder ? "" : "solid",
      }}
    >
      <Row>
        <Col lg={6}>
          <h2>
            <Highlight>{props.title}</Highlight>
          </h2>
          <h3>{props.creator}</h3>
          <h5>{props.details}</h5>
          <h4 className="mt-4">
            <Row className={isMobile() && !props.learnMore ? "mb-4" : ""}>
              <Col>{props.children}</Col>
            </Row>
            {props.learnMore ? (
              <Row className={isMobile() ? "mt-4 mb-4" : "mt-5"}>
                <Col>
                  <PageButton path={props.path}>LEARN MORE</PageButton>
                </Col>
              </Row>
            ) : null}
          </h4>
        </Col>
        <Col>
          <Image
            style={{ objectFit: "cover" }}
            width={"100%"}
            src={props.imagePath}
          />
        </Col>
      </Row>
    </Container>
  );
}

export function StoryContainer(props) {
  return (
    <Container
      className={props.className + " p-4"}
      style={{
        color: "white",
        pointerEvents: "auto",
        borderBottom: props.noBorder ? "" : "solid",
      }}
    >
      <Row>
        <Col className="my-auto">
          <h2>
            <Highlight>
              <b>{props.title}</b>
            </Highlight>
          </h2>
        </Col>
      </Row>
      <Row>
        <Col className="my-auto">
          <Image width={"100%"} src={props.imagePath} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="mt-4">{props.children}</h4>
        </Col>
      </Row>
    </Container>
  );
}

export function PersonBlock(props) {
  const { isMobile } = useIsMobile();

  return (
    <div
      className={isMobile() ? "text-center mb-4" : ""}
      style={{ pointerEvents: "auto" }}
    >
      <Row>
        <Col>
          <Image src={props.imagePath} width={250} />
        </Col>
      </Row>
      <Row>
        <Col style={{ color: "#b1fc05" }}>
          <h3>
            <b>{props.name}</b>
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>{props.title}</h4>
        </Col>
      </Row>
      <Row className={props.site == undefined ? "d-none" : ""}>
        <Col>
          <h5>
            <a
              target="_blank"
              style={{
                textDecoration: "none",
                color: "#b1fc05",
                pointerEvents: "auto",
              }}
              href={props.site}
            >
              Website
            </a>
          </h5>
        </Col>
      </Row>
    </div>
  );
}

export function PageButton(props) {
  const { isMobile } = useIsMobile();

  return (
    <Link
      className="hero-link"
      style={{
        textDecoration: "none",
        color: "white",
        border: "3px solid white",
        fontSize: isMobile() ? "1.2rem" : "1.5rem",
      }}
      to={props.path}
    >
      <span className="px-5">
        <b>{props.children}</b>
      </span>
    </Link>
  );
}

export function HorizontalBar(props) {
  const { isMobile } = useIsMobile();

  return (
    <div
      className={props.className}
      style={{
        pointerEvents: "none",
        color: "white",
        borderBottom: "solid",
      }}
    ></div>
  );
}

export function HomeContentBlock(props) {
  const { isMobile } = useIsMobile();

  return !isMobile() ? (
    <Container
      className="mt-4 p-4"
      style={{ color: "white", pointerEvents: "auto" }}
    >
      {props.textRight ? (
        <Row>
          <Col lg={6} className="my-auto">
            <Image width={"100%"} src={props.imagePath} />
          </Col>

          <Col lg={6}>
            <h2 className="mb-4" style={{ color: "#b1fc05" }}>
              <b>{props.header}</b>
            </h2>

            <h4 className="mb-5">{props.children}</h4>

            <Row>
              <Col>
                <PageButton path={props.linkPath}>{props.linkText}</PageButton>
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col lg={6}>
            <h2 className="mb-4" style={{ color: "#b1fc05" }}>
              <b>{props.header}</b>
            </h2>

            <h4 className="mb-5">{props.children}</h4>

            <Row>
              <Col>
                <PageButton path={props.linkPath}>{props.linkText}</PageButton>
              </Col>
            </Row>
          </Col>

          <Col lg={6} className="my-auto">
            <Image width={"100%"} src={props.imagePath} />
          </Col>
        </Row>
      )}
    </Container>
  ) : (
    <Container
      className="mt-4"
      style={{ color: "white", pointerEvents: "auto" }}
    >
      <Row>
        <Col lg={6} className="my-auto mt-2">
          <Image width={"100%"} src={props.imagePath} />
        </Col>

        <Col lg={6}>
          <h2 className="mb-2 mt-3" style={{ color: "#b1fc05" }}>
            <b>{props.header}</b>
          </h2>

          <h4 className="mb-4">{props.children}</h4>

          <Row>
            <Col>
              <PageButton path={props.linkPath}>{props.linkText}</PageButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export function ProjectPage(props) {
  const [show, setShow] = useState(false);
  const { isMobile } = useIsMobile();

  return (
    <div>
      <Row>
        <Col>
          <MidSize>
            <BlackHighlight className="px-3">{props.title}</BlackHighlight>
          </MidSize>
        </Col>
        {props.year && !isMobile() ? (
          <Col className="text-end">
            <MidSize>
              <BlackHighlight className="px-3">{props.year}</BlackHighlight>
            </MidSize>
          </Col>
        ) : null}
      </Row>

      <Row>
        <Col>
          <ModalImage height="300px" path={props.bannerPath} />
        </Col>
      </Row>

      <Row className={isMobile() ? "mt-2" : "mt-3"}>
        <Col
          lg={props.descriptionImagePath ? 6 : 12}
          className={isMobile() ? "mb-2" : ""}
        >
          <div
            style={{ border: "dashed", height: "100%" }}
            className="p-2 d-flex flex-column"
          >
            <Row>
              <Col>
                <BlackHighlight>DESCRIPTION:</BlackHighlight> {props.children}
              </Col>
            </Row>
            <Row className="mt-auto">
              <Col>
                <BlackHighlight>TECHNOLOGY:</BlackHighlight> {props.technology}
              </Col>
            </Row>
          </div>
        </Col>
        {props.descriptionImagePath ? (
          <Col>
            <ModalImage path={props.descriptionImagePath} />
          </Col>
        ) : null}
      </Row>

      {props.youtubeUrls.map((youtubeUrl) => (
        <Row className={isMobile() ? "mt-2" : "mt-3"}>
          <Col>
            <YoutubeVideo url={youtubeUrl} />
          </Col>
        </Row>
      ))}

      {/* <Row className={isMobile() ? "mt-2" : "mt-3"}>
        <Col>
          <YoutubeVideo url={props.youtubeEmbedUrl} title={props.title} />
        </Col>
      </Row> */}

      {props.primaryImagePaths.map((imagePath) => (
        <Row className={isMobile() ? "mt-2" : "mt-3"}>
          <Col>
            <ModalImage path={imagePath} />
          </Col>
        </Row>
      ))}

      {props.subImagePaths && !isMobile() ? (
        <Row className={isMobile() ? "mt-2" : "mt-3"}>
          {props.subImagePaths.map((imagePath) => {
            return (
              <Col>
                <ModalImage path={imagePath} />
              </Col>
            );
          })}
        </Row>
      ) : (
        <div>
          {props.subImagePaths?.map((imagePath) => {
            return (
              <Row className={isMobile() ? "mt-2" : "mt-3"}>
                <Col>
                  <ModalImage path={imagePath} />
                </Col>
              </Row>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function ProjectBanner(props) {
  const { isMobile } = useIsMobile();

  return (
    <Link
      to={props.path}
      target={props.external ? "_blank" : ""}
      style={{ textDecoration: "none" }}
    >
      <div className={"outer mb-3"} style={{ cursor: "pointer" }}>
        <Image
          style={{
            height: isMobile() ? "200px" : "300px",
            width: "100%",
            objectFit: "cover",
          }}
          src={props.imagePath}
        />
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
          className={"test p-3 d-flex flex-column"}
        >
          <Row>
            <Col>
              <span
                className="px-2"
                style={{
                  background: "black",
                  fontSize: !isMobile() ? 20 : "1rem",
                  border: "solid white",
                  color: "white",
                  // color: "#b1fc05"
                }}
              >
                {props.title}
              </span>
            </Col>
          </Row>

          {props.details ? (
            <Row
              className={
                true ? "mt-auto text-left" : "mt-auto text-left d-none"
              }
            >
              <Col>
                <span
                  className="px-2"
                  style={{
                    background: "black",
                    fontSize: !isMobile() ? "1rem" : "0.8rem",
                    border: "solid white",
                    color: "white",
                    // color: "#b1fc05"
                  }}
                >
                  {props.details}
                </span>
              </Col>
            </Row>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

export function ModalImage(props) {
  const { isMobile } = useIsMobile();
  const [show, setShow] = useState(false);

  return (
    <div
      className={props.className}
      style={{ cursor: "pointer", height: "100%" }}
    >
      <Image
        onClick={() => setShow(true)}
        style={{
          height: props.height ? props.height : "100%",
          width: props.width ? props.width : "100%",
          objectFit: "cover",
        }}
        src={props.path}
      />

      <Modal
        centered
        size={props.size ? props.size : "xl"}
        show={show}
        onHide={() => setShow(false)}
      >
        <Image onClick={() => setShow(false)} src={props.path} />
      </Modal>
    </div>
  );
}

export function YoutubeVideo(props) {
  const { isMobile } = useIsMobile();

  return (
    // <Row>
    //   <Col style={{ margin: 0, padding: isMobile() ? "" : 0 }}>
    <iframe
      width="100%"
      height={isMobile() ? 250 : 500}
      src={props.url}
      title={props.title}
      allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
    //   </Col>
    // </Row>
    // <iframe
    //   width="560"
    //   height="315"
    //   src="https://www.youtube.com/embed/BxGHLVm1FR4?si=oslxBYJXo-8Dz9kj"
    //   title="YouTube video player"
    //   frameborder="0"
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //   allowfullscreen
    // ></iframe>
  );
}
