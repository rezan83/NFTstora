import styled from "styled-components";
import video from "../../static/img/vid.mp4";
import circles from "../../static/img/circles.svg";
import { InnerLayout } from "../../layouts/Layouts";
import MainContent from "./MainContent";
import TopSellers from "./TopSellers";
import TopArticles from "./TopArticles";
import TopItems from "./TopItems";

const Main = () => {
  return (
    <main>
      <MainSection>
        <video id="video" src={video} muted autoPlay loop playsInline />
        <img src={circles} alt="" className="overlay" />
        <InnerLayout>
          <MainContent />
        </InnerLayout>
      </MainSection>
      <TopSellers />
      <TopArticles />
      <TopItems />
    </main>
  );
};
const MainSection = styled.div`
  width: 100%;
  height: 85vh;
  overflow: hidden;
  position: relative;
  #video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    width: 50%;
    top: -300px;
    right: 0;
  }
`;

export default Main;
