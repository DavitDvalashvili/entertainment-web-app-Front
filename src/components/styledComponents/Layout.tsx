import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  section {
    //background-color: red;
    width: 100%;
    overflow-y: hidden;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: left;
  }
`;

export default Layout;
