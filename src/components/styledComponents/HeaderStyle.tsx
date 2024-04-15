import styled from "styled-components";
import DefaultTheme from "../../DefaultTheme";

const HeaderStyle = styled.nav`
  background-color: ${DefaultTheme.colors.semiDarkBlue};
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 25px;
  }
  .logoutAvatarBox {
    a {
      text-decoration: none;
    }
    .avatar {
      width: 24px;
      border: 1px solid ${DefaultTheme.colors.pureWhite};
      border-radius: 50%;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 10px;
    span {
      &:hover {
        cursor: pointer;
        color: ${DefaultTheme.colors.red};
        text-decoration: none;
      }
    }
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
      &:hover {
        path {
          fill: ${DefaultTheme.colors.red};
        }
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
    border-radius: 10px;
    .logo {
      width: 32px;
    }
    .logoutAvatarBox {
      .avatar {
        width: 32px;
      }
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
    .logoutAvatarBox {
      margin-top: auto;
      flex-direction: column;
      gap: 12px;
      font-size: 12px;
    }
  }
`;
export default HeaderStyle;
