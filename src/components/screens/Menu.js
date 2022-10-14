import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dishes from "../JSON/dishes.json";

function Menu() {
  // Dishes Rendering Function
  let renderDishes = () => {
    return dishes.map((dish) => {
      return (
        <Dish style={{ background: `var(--card-5)` }}>
          <BgTag>
            <Top>
              <Span>Orders</Span>{" "}
              <ArrowDiv>
                <Arrow src={require("../assets/images/arrow.svg").default} />{" "}
              </ArrowDiv>
              <Span>Kitchen</Span>
            </Top>
            <DishDetail>
              <Name>{dish.title}</Name>
              <Price>${dish.price}</Price>
            </DishDetail>
            <AddDish>
              <Minus>
                <MinusImage
                  src={require("../assets/images/minus.svg").default}
                  alt="Minus"
                />
              </Minus>
              <DishAdded>0</DishAdded>
              <Plus>
                <PlusImage
                  src={require("../assets/images/plus.svg").default}
                  alt="Plus"
                />
              </Plus>
            </AddDish>
          </BgTag>
        </Dish>
      );
    });
  };

  return (
    <MenuContainer>
      <Wrapper className="wrapper">
        <Container>
          <Head>
            <Search>
              <SearchIcon
                src={require("../assets/images/search.svg").default}
              />
              <SearchInput placeholder="Search" />
            </Search>
          </Head>
          <Category>
            <Item style={{ background: "var(--card-1)" }}>
              <ImageContainer>
                <CategoryImage
                  src={require(`../assets/images/card-1.svg`).default}
                  alt="cardimage"
                />
              </ImageContainer>
              <Content>
                <Title>Break fast</Title>
                <Number>13 items</Number>
              </Content>
            </Item>
            <Item style={{ background: "var(--card-2)" }}>
              <ImageContainer>
                <CategoryImage
                  src={require(`../assets/images/card-2.svg`).default}
                  alt="cardimage"
                />
              </ImageContainer>
              <Content>
                <Title>Soups</Title>
                <Number>13 items</Number>
              </Content>
            </Item>
            <Item style={{ background: "var(--card-3)" }}>
              <ImageContainer>
                <CategoryImage
                  src={require(`../assets/images/card-3.svg`).default}
                  alt="cardimage"
                />
              </ImageContainer>
              <Content>
                <Title>Pasta</Title>
                <Number>13 items</Number>
              </Content>
            </Item>
            <Item style={{ background: "var(--card-4)" }}>
              <ImageContainer>
                <CategoryImage
                  src={require(`../assets/images/card-4.svg`).default}
                  alt="cardimage"
                />
              </ImageContainer>
              <Content>
                <Title>Sushi</Title>
                <Number>13 items</Number>
              </Content>
            </Item>
            <Item style={{ background: "var(--card-5)" }}>
              <ImageContainer>
                <CategoryImage
                  src={require(`../assets/images/card-5.svg`).default}
                  alt="cardimage"
                />
              </ImageContainer>
              <Content>
                <Title>Main course</Title>
                <Number>13 items</Number>
              </Content>
            </Item>
            <Item style={{ background: "var(--card-6)" }}>
              <ImageContainer>
                <CategoryImage
                  src={require(`../assets/images/card-6.svg`).default}
                  alt="cardimage"
                />
              </ImageContainer>
              <Content>
                <Title>Desserts</Title>
                <Number>13 items</Number>
              </Content>
            </Item>
            <Item style={{ background: "var(--card-7)" }}>
              <ImageContainer>
                <CategoryImage
                  src={require(`../assets/images/card-7.svg`).default}
                  alt="cardimage"
                />
              </ImageContainer>
              <Content>
                <Title>Drinks</Title>
                <Number>13 items</Number>
              </Content>
            </Item>
            <Item style={{ background: "var(--card-8)" }}>
              <ImageContainer>
                <CategoryImage
                  src={require(`../assets/images/card-8.svg`).default}
                  alt="cardimage"
                />
              </ImageContainer>
              <Content>
                <Title>Alcohol</Title>
                <Number>13 items</Number>
              </Content>
            </Item>
          </Category>

          <Line />

          <Dishes>{renderDishes()}</Dishes>

          <Bottom>
            <ProcessingOrders>
              <Order>
                <Code>T4</Code>
                <OrderDetail>
                  <Customer>Leslie K.</Customer>
                  <Kitchen>
                    6 items{" "}
                    <ArrowIcon
                      src={require("../assets/images/arrow.svg").default}
                    />{" "}
                    Kitchen
                  </Kitchen>
                  <Process>In process</Process>
                </OrderDetail>
              </Order>
              <Order>
                <Code>T2</Code>
                <OrderDetail>
                  <Customer>Leslie K.</Customer>
                  <Kitchen>
                    6 items{" "}
                    <ArrowIcon
                      src={require("../assets/images/arrow.svg").default}
                    />{" "}
                    Kitchen
                  </Kitchen>
                  <Process>In process</Process>
                </OrderDetail>
              </Order>
              <Order>
                <Code>T4</Code>
                <OrderDetail>
                  <Customer>Leslie K.</Customer>
                  <Kitchen>
                    6 items{" "}
                    <ArrowIcon
                      src={require("../assets/images/arrow.svg").default}
                    />{" "}
                    Kitchen
                  </Kitchen>
                  <Process>In process</Process>
                </OrderDetail>
              </Order>
            </ProcessingOrders>
          </Bottom>
        </Container>
      </Wrapper>
    </MenuContainer>
  );
}

export default Menu;

const MenuContainer = styled.section`
  width: 62%;
`;
const Wrapper = styled.div``;
const Container = styled.div``;
const Head = styled.div`
  height: 70px;
  display: flex;
`;
const Search = styled.div`
  width: 32%;
  display: flex;
  align-items: center;
  background: #2d2d2d;
  opacity: 0.7;
  margin: 14px 0px;
  border-radius: 5px;
`;
const SearchIcon = styled.img`
  width: 30px;
  height: 20px;
`;
const SearchInput = styled.input`
  &::placeholder {
    color: #fff;
    font-size: 15px;
    font-weight: 400;
  }
`;

const Category = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Item = styled.li`
  width: 24%;
  height: 120px;
  margin: 5px 0px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ImageContainer = styled.div`
  margin-left: 10px;
`;
const CategoryImage = styled.img``;
const Content = styled.div`
  margin-left: 10px;
`;
const Title = styled.h4`
  color: #000;
  font-weight: 600;
`;
const Number = styled.span`
  font-size: 14px;
  color: #8e8e8e;
`;

const Line = styled.hr`
  border-bottom: 1.5px solid #2d2d2d;
  margin: 5px 0px;
`;

const Dishes = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Dish = styled.li`
  width: 24%;
  height: 140px;
  margin: 5px 0px;
  border-radius: 8px;
`;
const BgTag = styled.div`
  padding-top: 5px;
  background-color: #2d2d2d;
  width: 90%;
  margin-left: 10%;
  height: 140px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 12px;
  color: #8e8e8e;
`;
const ArrowDiv = styled.span`
  width: 20px;
  display: inline-block;
`;
const Arrow = styled.img`
  height: 100%;
  width: 100%;
`;
const Span = styled.span``;
const DishDetail = styled.div`
  font-size: 15px;
  margin: 10px;
`;
const Name = styled.h4``;
const Price = styled.span`
  color: #8e8e8e;
`;
const AddDish = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 15px;
`;
const Minus = styled.span`
  border-radius: 4px;
  border: 1px solid #8e8e8e;
  margin-right: 10px;
  display: flex;
  width: 30px;
  padding: 5px;
`;
const MinusImage = styled.img`
  width: 100%;
  height: 100%;
`;
const DishAdded = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
const Plus = styled.span`
  border-radius: 4px;
  border: 1px solid #8e8e8e;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  width: 30px;
  padding: 5px;
`;
const PlusImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Bottom = styled.div``;
const ProcessingOrders = styled.ul`
  display: flex;
`;
const Order = styled.li`
  display: flex;
`;
const Code = styled.div``;
const OrderDetail = styled.div``;
const Customer = styled.h4``;
const Kitchen = styled.blockquote``;
const ArrowIcon = styled.img``;

const Process = styled.div``;
