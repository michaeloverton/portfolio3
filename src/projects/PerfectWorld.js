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
            title="PERFECT WORLD"
            technology="UNITY, HOUDINI, BLENDER, FMOD"
            bannerPath="/images/projects/perfect-world/TitleCard-Amaze.webp"
            descriptionImagePath="/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-8-Square.webp"
            link="https://phasein.itch.io/perfect-world"
            youtubeUrls={[
              "https://www.youtube.com/embed/DlQM8Fm4ubw?si=4fal8jb4Zzayjhww",
            ]}
            primaryImagePaths={[
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-3.webp",
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-12.webp",
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-13.webp",
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-14.webp",
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-4.webp",
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-10.webp",
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-15.webp",
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-6.webp",
              "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-9.webp",
            ]}
            // subImagePaths={[
            //   "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-10.webp",
            //   "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-6.webp",
            //   "/images/projects/perfect-world/Michael-Overton-Brown-Perfect-World-Unity-Game-9.webp",
            // ]}
          >
            Perfect World is an anti-capitalist art platformer. It is an
            environmentalist parable that subverts player incentivization and
            proposes that a sustainable future exists if we declare “I have
            enough”. It is a hallucination, a dream, a nightmare.

            <div className="mt-3">The game is a current nominee for A MAZE. Festival 2024 in Berlin.</div>
          </ProjectPage>

          <Footer />
        </Container>
      </Content>
    </AppWrapper>
  );
}
