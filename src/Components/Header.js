import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  margin-top: 1rem;
  height: 93px;
  @media screen and (min-width: 1280px) {
    width: 1070px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 960px;
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 98px;
    position: fixed;
    background-color: white;
    margin-top: 0;
    padding-top: 1rem;
  }
`;
const HeaderWrapper = styled.div`
  position: relative;
  padding: 0.5rem 1.5rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MenuBtn = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
  div {
    opacity: 0.5;
    width: 50px;
    height: 37px;
    border: 1px solid rgba(1, 1, 1, 0.3);
    cursor: pointer;
    padding: 4px 10px;
    border-radius: 4px;
  }
`;
const Logo = styled.div`
  font-size: 26px;
  font-weight: 600;
`;
const Nav = styled.nav`
  display: flex;
  @media screen and (max-width: 767px) {
    display: ${(props) => (props.showMenu ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 5rem;
    background-color: white;
    width: 100%;
    left: 0;
  }
`;
const NavLink = styled.li`
  padding: 1rem;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.09rem;
  cursor: pointer;
  opacity: ${(props) => (props.pathname ? 1 : 0.5)};
  color: ${(props) =>
    props.pathname ? props.theme.activeColor : props.theme.fontColor};
  &:hover {
    opacity: 1;
    color: ${(props) => props.theme.activeColor};
  }
`;

function Header() {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState();
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <MenuBtn onClick={() => setShowMenu(!showMenu)}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </MenuBtn>
        <Logo>Orion</Logo>
        <Nav showMenu={showMenu}>
          <Link to="/">
            <NavLink pathname={pathname === "/" ? true : false}>HOME</NavLink>
          </Link>
          <Link to="/about">
            <NavLink pathname={pathname === "/about" ? true : false}>
              ABOUT
            </NavLink>
          </Link>
          <Link to="/gallery">
            <NavLink pathname={pathname === "/gallery" ? true : false}>
              GALLERY
            </NavLink>
          </Link>
          <Link to="products">
            <NavLink pathname={pathname === "/products" ? true : false}>
              PRODUCTS
            </NavLink>
          </Link>
        </Nav>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
