import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 38px;
  section {
    width: 100%;
    overflow-y: hidden;
  }
  @media (min-width: 768px) {
    padding-bottom: 52px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: left;
    padding-bottom: 52px;
  }
`;

export default Layout;
