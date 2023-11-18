import styled from "styled-components";
import DefaultTheme from "../../DefaultTheme";

const LoaderStyle = styled.div`
  background-color: ${DefaultTheme.colors.darkBlue};
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
  }
`;

export default LoaderStyle;
