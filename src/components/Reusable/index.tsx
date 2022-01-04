import { ReactChildren,ReactChild } from "react";
import styled from "styled-components";
import tw from "twin.macro";

export const SectionContainer = styled.div`
  min-height: 400px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-col
    md:flex-row
    justify-between
    lg:px-20
    px-3

  `};
`;

export const ContentContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    mt-20
    mx-5
  `};
`;

export const AnimatingContainer = styled(ContentContainer)`
  ${tw`
    relative
  `};
`;

interface Idrive {
  drive: boolean;
  baseStyle: string;
  animate: {
    beforeDrive: string;
    afterDrive: string;
  };
}

export const ToBeAnimatedContainer = styled.div<Idrive>`
  ${(props) => props.baseStyle}
  ${(props) =>
    props.drive ? props.animate.afterDrive : props.animate.beforeDrive}

    transition: all 1000ms;
  img {
    ${tw`
        w-full
        lg:w-4/5
        
        `};
  }
`;

export const Title = styled.h2`
  ${tw`
        text-xl
        font-bold
    `}
`;

export const Paragraph = styled.p`
  ${tw`
    text-gray-200
  `}
`;
export const SecondParagraph = styled(Paragraph)`
  ${tw`
        text-gray-400
    `}
`;

const Colorful = `background-color: #f3ec78;
background-image: linear-gradient(to left, #7b00ff, #00c3ff);
background-size: 100%;
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent;
-moz-text-fill-color: transparent;`;

export const ColorfulTitle = styled.h2`
  ${Colorful}
`;
export const ColorfulSpan = styled.span`
  ${Colorful}
`;
export const animate = {
  beforeDrive: `transform:  translate(+5px, +5px);`,
  afterDrive: `transform:  translate(-300px, -5px);`,
};
export const baseStyle = `width: auto;
  height: 8em;
  top: -3.5em;
  position: absolute;
 `;

export const ButtonColorful = styled.button`
  background: linear-gradient(to left, #7b00ff, #00c3ff);
  background-size: 100%;
  border-radius: 50px;
  width: 100px;
  padding: 3px;
  transition: all 1000ms;
  &:hover {
    background: linear-gradient(to left, #00c3ff, #7b00ff);
  }
`;

export interface ISecondaryContainer {
  colorTitle: string;
  title: string;
  paragraph: string;
  children?: JSX.Element[] | JSX.Element;
}

export const SecondaryContainer = (props: ISecondaryContainer) => {
  return (
    <SecondContentContainer>
      <ColorfulTitle>{props.colorTitle}</ColorfulTitle>
      <Title>{props.title}</Title>
      <SecondParagraph>{props.paragraph}</SecondParagraph>
      {props.children}
    </SecondContentContainer>
  );
};

const SecondContentContainer = styled(ContentContainer)`
  ${tw`
        grid
        place-items-center
        gap-2
        w-full
        mx-0

    `}
`;


export interface IAvatarImage {
  size: string
}
export const AvatarImage = styled.div<IAvatarImage>`
  ${({size} )=> (
      `height: ${size};
      width: ${size};`
  )}}
  
  border-radius: 50%;
  overflow: hidden;

  img {
    width: auto;
  }
`;