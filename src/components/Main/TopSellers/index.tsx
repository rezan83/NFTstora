import { SecondaryContainer, ISecondaryContainer } from "../../Reusable";
import SellersAvatar from "./SellersAvatar";

const TopSellers = () => {
  const props: ISecondaryContainer = {
    colorTitle: "Top Sellers",
    title: "Top Sellers",
    paragraph:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur",
  };

  return (
    <SecondaryContainer {...props}>
      <SellersAvatar />
    </SecondaryContainer>
  );
};

export default TopSellers;
