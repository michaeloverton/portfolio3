import "../App.css";
import Footer from "../Footer";
import { Content, AppWrapper, ProjectPage } from "../layout/Layout";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";

export default function DoubleStar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppWrapper>
      <Content>
        <Container>
          <Header />

          <ProjectPage
            title="DOUBLE/STAR"
            year={2023}
            technology="UNREAL ENGINE 5, HOUDINI, BLENDER, FMOD"
            bannerPath="/images/projects/double-star/Double-Star-Unreal-Engine-4.png"
            // descriptionImagePath="/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-Square.png"
            youtubeEmbedUrl="https://www.youtube.com/embed/-QjuqbvksTw?si=AEfW5n1SgdhkoTKf"
            primaryImagePaths={[
              "/images/projects/double-star/Double-Star-Unreal-Engine-1.png",
              "/images/projects/double-star/Double-Star-Unreal-Engine-5.png",
              "/images/projects/double-star/Double-Star-Unreal-Engine-2.png",
              // "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-4.png",
            ]}
            // subImagePaths={[
            //   "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-6.png",
            //   "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-9-Square.png",
            //   "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-2.png",
            // ]}
          >
            DOUBLE/STAR is an adaptation of Robert Heinlein's book of the same
            name. It is an ambient and eerie sound-based exploration game.
          </ProjectPage>

          <Footer />
        </Container>
      </Content>
    </AppWrapper>
  );
}
