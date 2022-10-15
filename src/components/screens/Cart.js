import React from "react";
import styled from "styled-components";

function Cart() {
  return (
    <CartContainer>
      <Wrapper className="wrapper">
        <Container>
          <Head>
            <Heading>
              <Title>Table 5</Title>
              <Name>Leslie k</Name>
            </Heading>
            <Icon>
              <IconImage src={require("../assets/images/edit.svg").default} />
            </Icon>

            <ItemContainer>
              <ItemList>
                <Item>
                  <FlexContainer>
                    <Number>1</Number>
                    <ItemTitle>Roast chicken</ItemTitle>
                    <Price>$25.50</Price>
                  </FlexContainer>
                </Item>
              </ItemList>
            </ItemContainer>

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
                <Line />
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
                      <CashImage
                        src={require("../assets/images/dollar.svg").default}
                      />
                      <CashTitle>Cash</CashTitle>
                    </Cash>
                    <DebitCard>
                      <CardImage
                        src={require("../assets/images/credit.svg").default}
                      ></CardImage>
                      <CardTitle>Debit Card</CardTitle>
                    </DebitCard>
                    <Wallet>
                      <WalletImage
                        src={require("../assets/images/scan.svg").default}
                      ></WalletImage>
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
    </CartContainer>
  );
}

export default Cart;

const CartContainer = styled.aside``;
const Wrapper = styled.div``;
const Container = styled.div``;
const Head = styled.div``;
const Heading = styled.div``;
const Title = styled.h3``;
const Name = styled.blockquote``;
const Icon = styled.div``;
const IconImage = styled.img``;

const ItemContainer = styled.div``;
const ItemList = styled.ul``;
const Item = styled.li``;
const FlexContainer = styled.div``;
const Number = styled.span``;
const ItemTitle = styled.h4``;
const Price = styled.span``;


const TotalContainer = styled.div``;
const TopSection = styled.div``;
const SubTotal = styled.div``;
const SubTitle = styled.h4``;
const SubPrice = styled.span``;
const Tax = styled.div``;
const TaxTitle = styled.h4``;
const TaxPrice = styled.span``;
const Line = styled.hr``;

const Total = styled.div``;
const TotalTitle = styled.h4``;
const TotalPrice = styled.span``;

const BottomSection = styled.div``;
const PaymentMethod = styled.div``;
const PaymentTitle = styled.h2``;
const PaymentOption = styled.div``;
const Cash = styled.div``;
const CashImage = styled.img``;
const CashTitle = styled.h2``;
const DebitCard = styled.div``;
const CardImage = styled.img``;
const CardTitle = styled.h2``;
const Wallet = styled.div``;
const WalletImage = styled.img``;
const WalletTitle = styled.h2``;
const PlaceOrdered = styled.button``;