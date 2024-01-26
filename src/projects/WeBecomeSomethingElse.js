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
            bannerPath="/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-11.webp"
            descriptionImagePath="/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-Square.webp"
            youtubeEmbedUrl="https://www.youtube.com/embed/BxGHLVm1FR4?si=oslxBYJXo-8Dz9kj"
            primaryImagePaths={[
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-12.webp",
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-8.webp",
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-13.png",
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-14.png",
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-4.webp",
            ]}
            subImagePaths={[
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-6.webp",
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-9-Square.webp",
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-2.webp",
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
