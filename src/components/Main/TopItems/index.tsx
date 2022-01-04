import { SecondaryContainer, ISecondaryContainer } from "../../Reusable";
import ItemsContainer from "./ItemsContainer";

const TopArticles = () => {
  const props: ISecondaryContainer = {
    colorTitle: "Top Items",
    title: "New Items Available",
    paragraph:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur",
  };

  return (
    <SecondaryContainer {...props}>
      <ItemsContainer />
    </SecondaryContainer>
  );
};

export default TopArticles;