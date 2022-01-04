import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { data as sellers, Iseller } from "../../../data";
import { SecondParagraph ,AvatarImage} from "../../Reusable";

const SellersAvatar = () => {
  return (
    <ThreeGrid>
      <AvatarCard>
        <SellerAvatarList sellers={sellers} />
      </AvatarCard>
      <AvatarCard>
        <SellerAvatarList sellers={sellers} />
      </AvatarCard>
      <AvatarCard>
        <SellerAvatarList sellers={sellers} />
      </AvatarCard>
    </ThreeGrid>
  );
};

export default SellersAvatar;

const ThreeGrid = styled.div`
  ${tw`
        grid
        grid-cols-3
        gap-10
        p-5
        m-5
    `}
`;

const AvatarCard = styled.div`
  width: 400px;
  background: hsla(271, 100%, 18%, 1);
  border-radius: 5px;
  ${tw`
        p-5
        m-5
    `}
`;
const AvatarRow = styled.div`
  grid-template-columns: 50px 1fr 100px;
  ${tw`
        grid
        gap-1
        p-2
        my-2
    `}
`;
const AvatarInfo = styled.div`
  ${tw`
        flex
        flex-col
    `}
`;


interface Iprops {
  sellers: Iseller[];
}

const SellerAvatarList = ({ sellers }: Iprops) => {
  return (
    <>
      {sellers.map((seller) => {
        return (
          <AvatarRow key={seller.id}>
            <h4>{seller.id}</h4>
            <AvatarImage size={"100px"}>
              <img src={seller.image} alt="avatar" />
            </AvatarImage>
            <AvatarInfo>
              <h4>{seller.name}</h4>
              <SecondParagraph>{seller.currency}</SecondParagraph>
            </AvatarInfo>
          </AvatarRow>
        );
      })}
    </>
  );
};
