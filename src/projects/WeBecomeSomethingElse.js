import "../App.css";
import Footer from "../Footer";
import { Content, AppWrapper, ProjectPage } from "../layout/Layout";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";

export default function WeBecomeSomethingElse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppWrapper>
      <Content>
        <Container>
          <Header />

          <ProjectPage
            title="WE BECOME SOMETHING ELSE"
            year={2024}
            technology="VIRTUAL REALITY, UNREAL ENGINE 5, HOUDINI, BLENDER, FMOD"
            bannerPath="/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-11.png"
            descriptionImagePath="/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-Square.png"
            youtubeEmbedUrl="https://www.youtube.com/embed/BxGHLVm1FR4?si=oslxBYJXo-8Dz9kj"
            primaryImagePaths={[
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-12.png",
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-8.png",
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-4.png",
            ]}
            subImagePaths={[
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-6.png",
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-9-Square.png",
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-2.png",
            ]}
          >
            We Become Something Else examines the horror and beauty of having a
            physical existence, the chaos of having a body.
          </ProjectPage>

          <Footer />
        </Container>
      </Content>
    </AppWrapper>
  );
}
