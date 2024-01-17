import "../App.css";
import GanekNav from "../Nav";
import Footer from "../Footer";
import { Content, AppWrapper, ProjectPage } from "../layout/Layout";
import { useEffect } from "react";

export default function PerfectCity() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppWrapper>
      <Content>
        <GanekNav />

        <ProjectPage
          title="Perfect City: The Room"
          creator="Shengwei Zhou"
          tags={["Virtual Reality", "Unreal Engine", "Interactive Experience"]}
          bannerPath="/images/projects/2023/perfect-city/PerfectCity_TheRoom_16X9_001.webp"
          descriptionImagePath="/images/projects/2023/perfect-city/Perfect-City-The-Room_Virtual-Reality-4X5_002.webp"
          primaryImagePaths={[
            "/images/projects/2023/perfect-city/Perfect-City-Unreal-Engine-Virtual-Reality-001.webp",
          ]}
          // subImagePaths={[
          //   "/images/projects/2023/they-shall/TheyShallNotComeback_16X9_006.webp",
          //   "/images/projects/2023/they-shall/TSNCB_Unreal-Engine-Virtual-Reality-Square-005.webp",
          //   "/images/projects/2023/they-shall/TheyShallNotComeback_16X9_003.webp",
          // ]}
        >
          One of the episodes in the Perfect City series. Perfect City: The Room
          is a VR piece that explores the mental textures of a woman’s dreams
          and memories, inviting the audience to feel the different textures in
          this “room” inside her mind.
        </ProjectPage>
      </Content>

      <Footer />
    </AppWrapper>
  );
}
