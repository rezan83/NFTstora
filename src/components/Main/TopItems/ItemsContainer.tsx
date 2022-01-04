import styled, { keyframes } from "styled-components";
import tw from "twin.macro";
import { IArticle, Articles } from "../../../article";
import { ButtonColorful, SecondParagraph, AvatarImage } from "../../Reusable";
import person from "../../../static/img/person.jpg";

const ItemsContainer = () => {
  return (
    <FourGrid>
      <ItemList items={Articles} />
    </FourGrid>
  );
};

export default ItemsContainer;

const FourGrid = styled.div`
  ${tw`
        grid
        grid-cols-4
        gap-10
        p-5
        m-5
    `}
`;

const animateBorder = keyframes`
  from {
    background: linear-gradient(to left, #7b00ff, #00c3ff);
  }

  to {
    background: linear-gradient(to left, #00c3ff, #7b00ff );
  }
`;

let border = "-5px";
const ArticleCard = styled.div`
  width: 310px;
  background: hsla(271, 100%, 18%, 1);
  border-radius: 5px;
  position: relative;
  background-clip: padding-box;
  border: solid $border transparent;
  padding: 10px;
  &:before {
    content: "";
    position: absolute;
    top: ${border};
    right: ${border};
    bottom: ${border};
    left: ${border};
    z-index: -1;
    margin: -$border;
    border-radius: inherit;
    background: linear-gradient(to left, #7b00ff, #00c3ff);
    animation: ${animateBorder} 2s ease infinite;
  }
`;

const ArticleInfo = styled.div`
  ${tw`
        flex
        flex-col
        p-2
        m-2

    `}
`;

const ArticleImage = styled.div`
  height: 250px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
interface Iprops {
  items: IArticle[];
}

const ButtonColorfulWidth = styled(ButtonColorful)`
  width: 100%;
  border-radius: 2px;
`;

const ItemList = ({ items }: Iprops) => {
  return (
    <>
      {returnItems(items)}
      {returnItems(items)}
    </>
  );
};

const Publisher = styled.div`
  width: 80%;
  border: solid white 1px;
  background: hsla(271, 100%, 5%, 1);
  transform: translate(20px, -30px);
  p {
    margin: auto;
  }
  ${tw`
        flex
        items-center
        rounded-3xl

    `}
`;

const returnItems = (items: IArticle[]) => {
  return items.map((item) => {
    return (
      <ArticleCard key={item.id}>
        <ArticleImage>
          <img src={item.image} alt="Article" />
        </ArticleImage>
        <Publisher>
          <AvatarImage size={"50px"}>
            <img src={person} alt="" />
          </AvatarImage>
          <SecondParagraph>@Cool Guy</SecondParagraph>
        </Publisher>
        <ArticleInfo>
          <SecondParagraph>500$</SecondParagraph>
          <h4>Cool Item</h4>
        </ArticleInfo>
        <ButtonColorfulWidth>PLACE BID</ButtonColorfulWidth>
      </ArticleCard>
    );
  });
};
