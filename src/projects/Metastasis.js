import "../App.css";
import Footer from "../Footer";
import { Content, AppWrapper, ProjectPage } from "../layout/Layout";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";

export default function Metastasis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppWrapper>
      <Content>
        <Container>
          <Header />

          <ProjectPage
            title="METASTASIS"
            year={2023}
            technology="UNREAL ENGINE 5, HOUDINI, BLENDER, ABLETON LIVE"
            bannerPath="/images/projects/metastasis/Metastasis-Unreal-Engine-Michael-Overton-Brown-4.webp"
            descriptionImagePath="/images/projects/metastasis/Metastasis-Unreal-Engine-Michael-Overton-Brown-2-Square.webp"
            youtubeUrls={[
              "https://www.youtube.com/embed/_8Zmd9K7YzM?si=SzCYXmw1XAJOTAmA",
            ]}
            primaryImagePaths={[
              "/images/projects/metastasis/Metastasis-Unreal-Engine-Michael-Overton-Brown-5.webp",
              "/images/projects/metastasis/Metastasis-Unreal-Engine-Michael-Overton-Brown-1.webp",
            ]}
            // subImagePaths={[
            //   "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-6.webp",
            //   "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-9-Square.webp",
            //   "/images/projects/we-become-something-else/Michael-Overton-Brown-Embodiment1-2.webp",
            // ]}
          >
            Metaverse, metahuman, metastasis: humankind careens toward a future
            of ecological collapse through overproduction, resource
            mismanagement, and waste, and these concepts are reflected in
            human-created digital realities. What are the principles of collapse
            in these digital spaces?
            
            <div className="mt-3">Metastasis was a Boston Cyberarts official
            selection for Waveforms 2023, an art occurrence at the Boston Museum
            of Science. It was played on the OMNI, a domed IMAX screen, on July
            13, 2023.</div>
          </ProjectPage>

          <Footer />
        </Container>
      </Content>
    </AppWrapper>
  );
}
