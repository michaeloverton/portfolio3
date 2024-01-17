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
      style={{ width: isMobile() ? "100%" : "80%" }}
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
  const { isMobile } = useIsMobile();

  return (
    <div>
      <Container
        className={isMobile() ? "" : "px-4 pb-5"}
        style={{
          color: "white",
          pointerEvents: "auto",
        }}
      >
        <Row className={isMobile() ? "mb-4" : "mb-5"}>
          <Col>
            <Image
              style={{
                height: 300,
                width: "100%",
                objectFit: "cover",
                pointerEvents: "auto",
              }}
              src={props.bannerPath}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <h1 style={{ color: "#b1fc05" }}>
              <b>{props.title}</b>
            </h1>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <h2>
              <b>{props.creator}</b>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>
              {props.tags
                ? props.tags.map((tag) => (
                    <span>
                      <Highlight>{tag}</Highlight> |{" "}
                    </span>
                  ))
                : null}
            </h4>
          </Col>
        </Row>

        <HorizontalBar className={isMobile() ? "my-3" : "my-5"} />

        <Row>
          <Col lg={6} className={isMobile() ? "mb-3" : ""}>
            <h4 className={isMobile() ? "mt-3" : "mt-4"}>
              <Row>
                <Col>{props.children}</Col>
              </Row>
            </h4>
          </Col>
          <Col>
            <Image
              style={{ objectFit: "cover" }}
              width={"100%"}
              src={props.descriptionImagePath}
            />
          </Col>
        </Row>

        {props.primaryImagePaths.map((imagePath) => (
          <Row className={isMobile() ? "mt-3" : "mt-5"}>
            <Col>
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  pointerEvents: "auto",
                }}
                src={imagePath}
              />
            </Col>
          </Row>
        ))}

        {/* <Row className={isMobile() ? "mt-3" : "mt-5"}>
          <Col>
            <Image
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                pointerEvents: "auto",
              }}
              src={props.primaryImagePath}
            />
          </Col>
        </Row>
        {props.secondPrimaryImagePath ? (
          <Row className={isMobile() ? "mt-3" : "mt-5"}>
            <Col>
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  pointerEvents: "auto",
                }}
                src={props.secondPrimaryImagePath}
              />
            </Col>
          </Row>
        ) : null} */}

        <HorizontalBar className={isMobile() ? "my-3" : "my-5"} />

        <Row className={isMobile() ? "mt-3" : "mt-5"}>
          {props.subImagePaths
            ? props.subImagePaths.map((imagePath) => (
                <Col>
                  <Image
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      pointerEvents: "auto",
                    }}
                    src={imagePath}
                  />
                </Col>
              ))
            : null}
        </Row>

        {props.subImagePaths ? (
          <HorizontalBar className={isMobile() ? "my-3" : "my-5"} />
        ) : null}
      </Container>
    </div>
  );
}
