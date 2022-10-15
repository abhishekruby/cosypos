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
            <TotalContainer>
              <TopSection>
                <SubTotal>
                  <SubTitle>Subtotal</SubTitle>
                  <SubPrice>$171.5</SubPrice>
                </SubTotal>
                <Tax>
                  <TaxTitle>Tax 10%</TaxTitle>
                  <TaxPrice>$17.15</TaxPrice>
                </Tax>
                <Line/>
                <Total>
                  <TotalTitle>Total</TotalTitle>
                  <TotalPrice>$2883.5</TotalPrice>
                </Total>
              </TopSection>
              <BottomSection>
                <PaymentMethod>
                  <PaymentTitle>Payment Method</PaymentTitle>
                  <PaymentOption>
                    <Cash>
                      <CashImage src={require("../assets/images/dollar.svg").default}/>
                      <CashTitle>Cash</CashTitle>
                    </Cash>
                    <DebitCard>
                        <CardImage src={require("../assets/images/credit.svg").default}></CardImage>
                        <CardTitle>Debit Card</CardTitle>
                    </DebitCard>
                    <Wallet>
                        <WalletImage src={require("../assets/images/scan.svg").default}></WalletImage>
                        <WalletTitle>E-wallet</WalletTitle>
                    </Wallet>
                    <PlaceOrdered>Place Order</PlaceOrdered>
                  </PaymentOption>
                </PaymentMethod>
              </BottomSection>
            </TotalContainer>
          </Head>
        </Container>
      </Wrapper>
    </Cart>
  );
}

export default Cart;
