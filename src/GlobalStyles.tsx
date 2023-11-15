import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
margin: 0px;
padding: 0px;
box-sizing: border-box;
}
body {
  &::-webkit-scrollbar {
    display: none;
  }
}

`;

export default GlobalStyle;
