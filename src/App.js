import "./App.css";
import styled from "styled-components";
import Menu from "./components/screens/Menu";
import MenuBar from "./components/screens/MenuBar";
import Cart from "./components/screens/Cart";
import React, { useState } from "react";
import dishes from "../src/components/JSON/dishes.json";

function App() {
  const [cartItems, setCartItem] = useState([]);

  // add to cart function 
  const addToCart = (id) => {
    let isCart = true;

    let item = dishes.find((dish) => dish.id === id);
    if (cartItems.length > 0) {
      isCart = cartItems.find((cartItem) => {
        if (cartItem.id === item.id) {
          cartItem.qty += 1;
          cartItem.price += item.price;
          console.log(cartItems);
          setCartItem([...cartItems]);
          return true;
        }
        return false;
      });
    } else {
      let newItem = {
        id: item.id,
        number: cartItems.length + 1,
        title: item.title,
        price: item.price,
        qty: 1,
      };
      // console.log(newItem);
      setCartItem([...cartItems, newItem]);
    }

    cartItems.map(() => {
      if (Boolean(isCart) === false) {
        let newItem = {
          id: item.id,
          number: cartItems.length + 1,
          title: item.title,
          price: item.price,
          qty: 1,
        };
  
        setCartItem([...cartItems, newItem]);
        console.log("i have entered map");
      }
      return null;
    });
  };

  return (
    <>
      <Spotlight>
        <MenuBar />
        <Menu addToCart={addToCart} />
        <Cart cartItems={cartItems} />
      </Spotlight>
    </>
  );
}

export default App;
const Spotlight = styled.section`
  display: flex;
  width: 100%;
`;
