import { SecondaryContainer, ISecondaryContainer } from "../../Reusable";
import ArticlesContainer from "./ArticlesContainer";

const TopArticles = () => {
  const props: ISecondaryContainer = {
    colorTitle: "Top Articles",
    title: "Top Articles",
    paragraph:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur",
  };

  return (
    <SecondaryContainer {...props}>
      <ArticlesContainer />
    </SecondaryContainer>
  );
};

export default TopArticles;