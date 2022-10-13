import "./App.css";
import styled from "styled-components";
import Menu from "./components/screens/Menu";
import MenuBar from "./components/screens/MenuBar";
import Cart from "./components/screens/Cart";

function App() {
  return (
    <>
      <Spotlight>
        <MenuBar />
        <Menu />
        <Cart />
      </Spotlight>
    </>
  );
}

export default App;
const Spotlight = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
`;
