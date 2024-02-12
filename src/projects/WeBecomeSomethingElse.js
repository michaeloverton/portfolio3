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
            youtubeUrls={[
              "https://www.youtube.com/embed/BHy_5GZEifA",
              "https://www.youtube.com/embed/BxGHLVm1FR4?si=oslxBYJXo-8Dz9kj",
            ]}
            primaryImagePaths={[
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-12.webp",
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-8.webp",
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-13.png",
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-14.png",
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-4.webp",
              "/images/projects/we-become-something-else/WeBecomeSomethingElseTitle.webp",
            ]}
            subImagePaths={[
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-6.webp",
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-9-Square.webp",
              "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-2.webp",
            ]}
          >
            <div className="mb-5">
              <div className="mb-3">
                We Become Something Else is an experimental interactive virtual
                reality animation that explores life, death, rebirth, and the
                unity of all things. The player is taken on a journey through a
                series of abstract, evocative spaces, challenging traditional
                narrative structure by allowing the spaces, architectures, and
                music to convey the emotional narrative of the work.{" "}
              </div>
              <div>
                There is simultaneous beauty and horror in the fact that we as
                humans are composed of the same matter as everything else in the
                universe. And because of this fundamental truth, when we are
                “gone”, we are not truly gone: we have merely become something
                else. This work attempts to convey the terrible beauty of that
                reality.
              </div>
            </div>
          </ProjectPage>

          <Footer />
        </Container>
      </Content>
    </AppWrapper>
  );
}
