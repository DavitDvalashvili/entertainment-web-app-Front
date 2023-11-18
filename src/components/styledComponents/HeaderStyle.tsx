import styled from "styled-components";
import DefaultTheme from "../../DefaultTheme";

const HeaderStyle = styled.nav`
  background-color: ${DefaultTheme.colors.semiDarkBlue};
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  .logo {
    width: 25px;
  }
  .avatar {
    width: 24px;
    border: 1px solid ${DefaultTheme.colors.pureWhite};
    border-radius: 50%;
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    svg {
      path {
        height: 16px;
      }
    }
    .active {
      path {
        fill: ${DefaultTheme.colors.pureWhite};
      }
    }
  }

  @media (min-width: 768px) {
    margin: 23px 24px 0px 24px;
    padding: 24px;
    .logo {
      width: 32px;
    }
    .avatar {
      width: 32px;
    }
    nav {
      svg {
        path {
          height: 2px;
        }
      }
    }
  }
  @media (min-width: 1440px) {
    margin: 32px 0px 32px 32px;
    width: 96px;
    height: 960px;
    flex-direction: column;
    justify-content: flex-start;
    padding: 32px 0px;
    nav {
      flex-direction: column;
      margin-top: 75px;
      gap: 35px;
    }
    .avatar {
      margin-top: auto;
    }
  }
`;
export default HeaderStyle;
