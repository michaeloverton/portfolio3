import "../App.css";
import Footer from "../Footer";
import { Content, AppWrapper, ProjectPage } from "../layout/Layout";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";

export default function PerfectWorld() {
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
            technology="UNITY, HOUDINI, BLENDER, FMOD"
            bannerPath="/images/projects/perfect-world/TitleCard.png"
            descriptionImagePath="/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-8-Square.png"
            youtubeEmbedUrl="https://www.youtube.com/embed/DlQM8Fm4ubw?si=4fal8jb4Zzayjhww"
            primaryImagePaths={[
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-12.png",
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-3.png",
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-13.png",
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-14.png",
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-4.png",
            ]}
            subImagePaths={[
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-10.png",
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-6.png",
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-9.png",
            ]}
          >
            Perfect World is an anti-capitalist art platformer. It is an
            environmentalist parable that subverts player incentivization and
            proposes that a sustainable future exists if we declare “I have
            enough”. It is a hallucination, a dream, a nightmare.
          </ProjectPage>

          <Footer />
        </Container>
      </Content>
    </AppWrapper>
  );
}
