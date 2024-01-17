import "../App.css";
import GanekNav from "../Nav";
import Footer from "../Footer";
import { Content, AppWrapper, ProjectPage } from "../layout/Layout";
import { useEffect } from "react";

export default function TheyShall() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppWrapper>
      <Content>
        <GanekNav />

        <ProjectPage
          title="They Shall Not Come Back"
          creator="Seleny Xie"
          tags={["Virtual Reality", "Unreal Engine", "Interactive Experience"]}
          bannerPath="/images/projects/2023/they-shall/TheyShallNotComeback_16X9_002.webp"
          descriptionImagePath="/images/projects/2023/they-shall/They-Shall-Not-Comeback-Virtual-Reality-4X5-002.webp"
          primaryImagePaths={[
            "/images/projects/2023/they-shall/TSNCB_Unreal-Engine-Virtual-Reality-002.webp",
          ]}
          subImagePaths={[
            "/images/projects/2023/they-shall/TheyShallNotComeback_16X9_006.webp",
            "/images/projects/2023/they-shall/TSNCB_Unreal-Engine-Virtual-Reality-Square-005.webp",
            "/images/projects/2023/they-shall/TheyShallNotComeback_16X9_003.webp",
          ]}
        >
          They Shall Not Come Back is a narrative-driven VR interactive
          experience that enables the player to embody the lingering soul of a
          young soldier lost amidst the turmoil of World War I, striving to
          reunite with his family in NYC for one final encounter. Caught between
          the harsh battlefield reality and the ethereal realm of the afterlife,
          you'll embark on a profoundly moving journey across time and space,
          uncovering the enduring strength of bonds and affection that surpass
          the bounds of mortality.
        </ProjectPage>
      </Content>

      <Footer />
    </AppWrapper>
  );
}
