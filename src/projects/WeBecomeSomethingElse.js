import "../App.css";
import GanekNav from "../Nav";
import Footer from "../Footer";
import { Content, AppWrapper, ProjectPage } from "../layout/Layout";
import { useEffect } from "react";

export default function WeBecomeSomethingElse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppWrapper>
      <Content>
        <GanekNav />

        <ProjectPage
          title="EMBODIMENT I: We Become Something Else"
          creator="Michael Overton Brown"
          tags={[
            "Virtual Reality",
            "Unreal Engine",
            "Interactive Filmic Experience",
          ]}
          bannerPath="/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-11.png"
          descriptionImagePath="/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-Square.png"
          primaryImagePaths={[
            "/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-12.png",
            "/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-8.png",
            "/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-4.png",
          ]}
          subImagePaths={[
            "/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-6.png",
            "/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-9-Square.png",
            "/images/projects/2023/phantoms/Michael-Overton-Brown-Embodiment1-2.png",
          ]}
        >
          Examines the horror and beauty of having a physical existence. The
          chaos of having a body.
        </ProjectPage>
      </Content>

      <Footer />
    </AppWrapper>
  );
}
