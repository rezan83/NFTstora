import styled from "styled-components";
import tw from "twin.macro";
import logo from "../../static/img/logo.png";
import { ButtonColorful } from "../Reusable";

const Logo = styled.div`
  img {
    width: 40px;
  }
`;
const Nav = styled.nav`
  width: 80vw;
  height: 100px;
  top: 0;
  transform: translateX(10%);
  background: linear-gradient(
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.9)
  );
  z-index: 10;
  ${tw`
        flex
        justify-between
        items-center
        fixed
        px-5
    `}
  ul {
    width: 50%;
    ${tw`
        flex
        justify-between
    `}
    
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <img
          src={logo}
          alt="logo
        "
        />
      </Logo>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <ButtonColorful>LOG IN</ButtonColorful>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
