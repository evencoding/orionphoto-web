import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  fontColor: "black",
  aboutBgColor: "#FEFBFB",
  activeColor: "#89684E",
  bgColor: "white",
};
export const darkTheme = {
  fontColor: "white",
  aboutBgColor: "#FEFBFB",
  activeColor: "#89684E",
  bgColor: "black",
};

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    li{
      list-style: none;
    }
    a{
        text-decoration: none;
    }
`;

export default GlobalStyles;
