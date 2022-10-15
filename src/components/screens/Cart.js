import React from "react";
import styled from "styled-components";

function Cart() {
  return (
    <Cart>
      <Wrapper>
        <Container>
          <Head>
            <Heading>
              <Title>Table 5</Title>
              <Name>Leslie k</Name>
              <Icon>
                <IconImage src={require("../assets/images/").default} />
              </Icon>
            </Heading>
            <CartContainer>
              <ItemList>
                <Item>
                  <FlexContainer>
                    <Number></Number>
                    <Title></Title>
                    <Price></Price>
                  </FlexContainer>
                </Item>
              </ItemList>
            </CartContainer>
            TotalContainer
          </Head>
        </Container>
      </Wrapper>
    </Cart>
  );
}

export default Cart;
