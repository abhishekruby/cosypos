import "./App.css";
import styled from "styled-components";
import Menu from "./components/screens/Menu";
import MenuBar from "./components/screens/MenuBar";
import Cart from "./components/screens/Cart";

function App() {
  let addToCart = () =>{
    console.log("addtoCart")
  }
  return (
    <>
      <Spotlight>
        <MenuBar />
        <Menu {...addToCart} />
        <Cart />
      </Spotlight>
    </>
  );
}

export default App;
const Spotlight = styled.section`
  display: flex;
  width: 100%;
`;
