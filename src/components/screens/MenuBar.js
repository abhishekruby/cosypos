import React from "react";
import styled from "styled-components";

function MenuBar() {
  return (
    <MenuContainer>
      <Wrapper className="wrapper">
        <FlexContainer>
          <TopSection>
            <Logo>
              <LogoAnchor>
                <LogoImage
                  src={require("../assets/images/logo.png")}
                  alt="Cosypos Logo"
                />
              </LogoAnchor>
            </Logo>
            <MenuListContainer>
              <MenuList>
                <ListAnchor> Reservation</ListAnchor>
              </MenuList>
              <MenuList>
                <ListAnchor> Table Service</ListAnchor>
              </MenuList>
              <MenuList>
                <ListAnchor> Menu</ListAnchor>
              </MenuList>
              <MenuList>
                <ListAnchor> Delivery</ListAnchor>
              </MenuList>
              <MenuList>
                <ListAnchor> Accounting</ListAnchor>
              </MenuList>
            </MenuListContainer>
          </TopSection>
          <BottomSection>
            <UserList>
              <User>
                <Letter>L</Letter>
                <Name>Lesliya k</Name>
              </User>
              <User>
                <Letter>C</Letter>
                <Name>Camaron W.</Name>
              </User>
              <User>
                <Letter>J</Letter>
                <Name>Jacob j.</Name>
              </User>
            </UserList>
            <Year>
              <YearLetter>C</YearLetter>
              <AppYear>2022 CosyPOS App</AppYear>
            </Year>
          </BottomSection>
        </FlexContainer>
      </Wrapper>
    </MenuContainer>
  );
}

export default MenuBar;

const MenuContainer = styled.aside`
  width: 18%;
`;
const Wrapper = styled.div``;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TopSection = styled.div``;
const Logo = styled.h1`
  width: 70%;
  margin: 0 auto;
  padding-top: 15px;
`;
const LogoAnchor = styled.a`
  display: inline-block;
`;
const LogoImage = styled.img`
  height: 100%;
  width: 100%;
`;

const MenuListContainer = styled.ul`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: space-between;
`;
const MenuList = styled.li`
  width: 55%;
  margin: 0 auto;
  color: #a6a6a6;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: -6px;
    left: -16px;
    height: 40px;
    width: 190px;
    border-radius: 8px;
    background: #2d2d2d;
    opacity: 0.7;
    z-index: -1;
  }
  :hover {
    color: #fff;
  }
`;
const ListAnchor = styled.a`
  font-size: 15px;
`;

const BottomSection = styled.div``;
const UserList = styled.ul``;
const User = styled.li``;
const Letter = styled.span``;
const Name = styled.span``;

const Year = styled.div``;
const YearLetter = styled.span``;
const AppYear = styled.span``;
