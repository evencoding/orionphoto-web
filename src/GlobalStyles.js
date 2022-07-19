import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  fontColor: "black",
  activeColor: "#89684E",
  bgColor: "white",
};
export const darkTheme = {
  fontColor: "white",
  activeColor: "#89684E",
  bgColor: "black",
};

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
    }
`;

export default GlobalStyles;
