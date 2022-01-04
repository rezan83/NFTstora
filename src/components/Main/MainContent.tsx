import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useIsVisible } from "../../hooks";
import {
  AnimatingContainer,
  ContentContainer,
  SectionContainer,
  ToBeAnimatedContainer,
  ColorfulTitle,
  ColorfulSpan,
  Paragraph,
} from "../Reusable";
import mainImage from "../../static/img/mainimage.png";

const animate = {
  beforeDrive: `transform:  translate(600px, -300px) scale(.5);`,
  afterDrive: `transform:  translate(100px, 0px) scale(1.5);`,
};
const baseStyle = `
  z-index: 5;
  top: -3.5em;
  position: absolute;
 `;
const MainContent = () => {
  const ref: any = React.useRef();
  const isVisible = useIsVisible(ref);

  return (
    <MainContentStyle>
      <SectionContainer>
        <ContentContainerDark>
          <ColorfulTitle>Lorem ipsum dolor sit, pariatur!</ColorfulTitle>
          <MainTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            odit.
            <ColorfulSpan> laboriosam animi voluptatum officia?</ColorfulSpan>
          </MainTitle>
          <MainParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            rerum provident labore, fugit aspernatur perferendis id est nobis
            quos repellendus ea, minus dolorum. Quasi veniam explicabo minima ea
            esse itaque tenetur dicta, et eius{" "}
          </MainParagraph>
        </ContentContainerDark>
        <AnimatingContainer>
          <ToBeAnimatedContainer
            ref={ref}
            drive={isVisible}
            baseStyle={baseStyle}
            animate={animate}
          >
            <img src={mainImage} alt="" />
          </ToBeAnimatedContainer>
        </AnimatingContainer>
      </SectionContainer>
    </MainContentStyle>
  );
};

const MainContentStyle = styled.div`
  position: absolute;
  top: 200px;
`;
const MainTitle = styled.h1`
  ${tw`
    text-white
    font-bold
    text-4xl
    my-10
  `}
`;

const ContentContainerDark = styled(ContentContainer)`
  border-radius: 20px;
  padding: 20px;
  margin-left: -200px;
  background: linear-gradient(
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.9)
  );
`;
const MainParagraph = styled(Paragraph)``;
export default MainContent;
