import styled from "styled-components";
import tw from "twin.macro";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const Title = styled.h1`
  ${tw`
  `}
`;
function App() {
  return (
    <div className= "App">
      <Navbar />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
