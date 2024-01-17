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

        <Container style={{ color: "white" }}>
          {/* <Row>
            <Col>
              <div className="outer">
                <Image
                  style={{
                    // height: "100%",
                    // width: "500px",
                    width: "100%",
                    // objectFit: "cover",
                    // position: "absolute",
                  }}
                  src="/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-Square.png"
                />
                <div
                  style={{
                    // position: "absolute",
                    // height: "500px",
                    width: "100%",
                    height: "100%",
                    color: "#b1fc05",
                    fontSize: 70,
                    overflow: "hidden"
                  }}
                  className="test p-3"
                >
                  We Become Something Else
                </div>
              </div>
            </Col>
            <Col>
              <div className="outer">
                <Image
                  style={{
                    // height: "100%",
                    // width: "500px",
                    width: "100%",
                    objectFit: "cover",
                    // position: "absolute",
                  }}
                  src="/images/projects/perfect-world/Perfect-World-Unity-Game-1.png"
                />
                <div
                  style={{
                    // position: "absolute",
                    // height: "500px",
                    width: "100%",
                    height: "100%",
                    color: "#b1fc05",
                    fontSize: 70,
                    overflow: "hidden"
                  }}
                  className="test p-3"
                >
                  Perfect World
                </div>
              </div>
            </Col>
          </Row> */}

          <Row>
            <Col>
              <div className="outer">
                <Image
                  style={{
                    height: "300px",
                    // width: "500px",
                    width: "100%",
                    objectFit: "cover",
                    // position: "absolute",
                  }}
                  src="/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-Square.png"
                />
                {/* <div
                  style={{
                    // position: "absolute",
                    // height: "500px",
                    width: "100%",
                    height: "100%"
                  }}
                  className="test"
                >
                  &nbsp;
                </div> */}
                <div
                  style={{
                    // position: "absolute",
                    // height: "500px",
                    width: "100%",
                    height: "100%",
                    color: "#b1fc05",
                    fontSize: 25,
                    overflow: "hidden"
                  }}
                  className="test p-3"
                >
                  We Become Something Else
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="outer">
                <Image
                  style={{
                    height: "300px",
                    // width: "500px",
                    width: "100%",
                    objectFit: "cover",
                    // position: "absolute",
                  }}
                  src="/images/projects/perfect-world/Perfect-World-Unity-Game-1.png"
                />
                {/* <div
                  style={{
                    // position: "absolute",
                    // height: "500px",
                    width: "100%",
                    height: "100%"
                  }}
                  className="test"
                >
                  &nbsp;
                </div> */}
                <div
                  style={{
                    // position: "absolute",
                    // height: "500px",
                    width: "100%",
                    height: "100%",
                    color: "#b1fc05",
                    fontSize: 25,
                    overflow: "hidden"
                  }}
                  className="test p-3"
                >
                  <span style={{background: "black"}}>Perfect World</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="outer">
                <Image
                  style={{
                    height: "300px",
                    // width: "500px",
                    width: "100%",
                    objectFit: "cover",
                    // position: "absolute",
                  }}
                  src="/images/projects/metastasis/Metastasis-Unreal-Engine-Michael-Overton-Brown-1.png"
                />
                {/* <div
                  style={{
                    // position: "absolute",
                    // height: "500px",
                    width: "100%",
                    height: "100%"
                  }}
                  className="test"
                >
                  &nbsp;
                </div> */}
                <div
                  style={{
                    // position: "absolute",
                    // height: "500px",
                    width: "100%",
                    height: "100%",
                    // color: "#b1fc05",
                    color: "white",
                    fontSize: 25,
                    overflow: "hidden"
                  }}
                  className="test p-3"
                >
                  <span style={{background: "black"}}>Metastasis</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Content>

      <Footer />
    </AppWrapper>
  );
}
