import styled from "styled-components";
import tw from "twin.macro";
import { IArticle, Articles } from "../../../article";
import { SecondParagraph } from "../../Reusable";

const ArticlesContainer = () => {
  return (
    <FourGrid>
      <ArticleList articles={Articles} />
    </FourGrid>
  );
};

export default ArticlesContainer;

const FourGrid = styled.div`
  ${tw`
        grid
        grid-cols-4
        gap-10
        p-5
        m-5
    `}
`;

const ArticleCard = styled.div`
  width: 310px;
  background: hsla(271, 100%, 18%, 1);
  border-radius: 5px;
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
    object-fit:cover;
  }
`;
interface Iprops {
  articles: IArticle[];
}

const ArticleList = ({ articles }: Iprops) => {
  return (
    <>
      {articles.map((article) => {
        return (
          <ArticleCard key={article.id}>
            <ArticleImage>
              <img src={article.image} alt="Article" />
            </ArticleImage>
            <ArticleInfo>
              <SecondParagraph>{article.title}</SecondParagraph>
              <h4>by: {article.name}</h4>
            </ArticleInfo>
          </ArticleCard>
        );
      })}
    </>
  );
};
