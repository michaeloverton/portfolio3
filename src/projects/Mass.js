import "../App.css";
import Footer from "../Footer";
import { Content, AppWrapper, ProjectPage } from "../layout/Layout";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";

export default function Mass() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppWrapper>
      <Content>
        <Container>
          <Header />

          <ProjectPage
            title="MASS"
            year={2022}
            technology="UNITY, BLENDER, FMOD"
            bannerPath="/images/projects/mass/Mass-Unity-Game-1.webp"
            descriptionImagePath="/images/projects/mass/Mass-Unity-Game-3-Square.webp"
            youtubeUrls={[
              "https://www.youtube.com/embed/lagvz8v3sBE?si=EEhkTi_dgwgQZ4ql",
            ]}
            primaryImagePaths={[
              "/images/projects/mass/Mass-Unity-Game-4.webp",
              "/images/projects/mass/Mass-Unity-Game-2.webp",
              // "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-4.webp",
            ]}
            // subImagePaths={[
            //   "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-6.webp",
            //   "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-9-Square.webp",
            //   "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-2.webp",
            // ]}
          >
            MASS is a Catholicism-inflected body horror music space "game" for
            Windows. Traversal of the space allows the player to create
            interactive music: "playing" the experience is "performing" the
            music.
          </ProjectPage>

          <Footer />
        </Container>
      </Content>
    </AppWrapper>
  );
}
