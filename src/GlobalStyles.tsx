import { createGlobalStyle } from "styled-components";
import DefaultTheme from "./DefaultTheme";

const GlobalStyle = createGlobalStyle`
* {
margin: 0px;
padding: 0px;
box-sizing: border-box;
font-family: 'Outfit', sans-serif;
color: ${DefaultTheme.colors.pureWhite};

}
body {
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: ${DefaultTheme.colors.darkBlue};
}

`;

export default GlobalStyle;
