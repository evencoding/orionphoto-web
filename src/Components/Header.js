import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  margin-top: 10px;
  display: flex;
  padding: 2rem 0;
  margin-bottom: 2.75rem;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1280px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
  @media screen and (max-width: 767px) {
    position: relative;
  }
`;
const Logo = styled.div`
  font-size: 26px;
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 40px;
    right: 10px;
  }
`;
const CategoryBtn = styled.div`
  display: none;
  opacity: 0.5;
  width: 50px;
  border: 1px solid rgba(1, 1, 1, 0.3);
  cursor: pointer;
  border-radius: 4px;
  padding: 3px 10px;
  margin-bottom: ${(props) => (props.showMenu ? "20px" : 0)};
  @media screen and (max-width: 767px) {
    display: inline-block;
  }
`;
const Categories = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 900;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const Category = styled.div`
  padding: 1rem;
  letter-spacing: 0.08rem;
  cursor: pointer;
  opacity: ${(props) => (props.pathname ? 1 : 0.6)};
  color: ${(props) =>
    props.pathname ? props.theme.activeColor : props.theme.fontColor};
  &:hover {
    opacity: 1;
    color: ${(props) => props.theme.activeColor};
  }
  @media screen and (max-width: 767px) {
    display: ${(props) => (props.showMenu ? null : "none")};
    padding-left: 0;
    color: ${(props) => props.theme.activeColor};
    opacity: 1;
  }
`;

function Header() {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Container>
      <Logo>Orion Photo</Logo>
      <Categories>
        <CategoryBtn onClick={() => setShowMenu(!showMenu)} showMenu={showMenu}>
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
        </CategoryBtn>
        <Link to={"/"}>
          <Category
            showMenu={showMenu}
            pathname={pathname === "/" ? true : false}
          >
            HOME
          </Category>
        </Link>
        <Link to={"/about"}>
          <Category
            showMenu={showMenu}
            pathname={pathname === "/about" ? true : false}
          >
            ABOUT
          </Category>
        </Link>
        <Link to={"/gallery"}>
          <Category
            showMenu={showMenu}
            pathname={pathname === "/gallery" ? true : false}
          >
            GALLERY
          </Category>
        </Link>
        <Link to={"/products"}>
          <Category
            showMenu={showMenu}
            pathname={pathname === "/products" ? true : false}
          >
            PRODUCTS
          </Category>
        </Link>
      </Categories>
    </Container>
  );
}

export default Header;
