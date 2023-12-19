import styled from "styled-components";
import DefaultTheme from "../../DefaultTheme";

const FormPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 58.4px;
  padding: 48px 24px 170px 24px;
  height: 100vh;
  .logo {
    width: 32px;
  }
  .container {
    background-color: ${DefaultTheme.colors.semiDarkBlue};
    padding: 24px 24px 32px 24px;
    widows: 100%;
    border-radius: 10px;
    h2 {
      font-size: 32px;
      font-weight: 300;
      letter-spacing: -0.5px;
      margin-bottom: 40px;
    }
    form {
      div {
        width: 279px;
        height: 37px;
        border-bottom: 1px solid ${DefaultTheme.colors.greyishBlue};
        margin-bottom: 24px;
        display: flex;
        justify-content: space-between;
        align-items: top;
        :hover {
          cursor: pointer;
          border-bottom: 1px solid ${DefaultTheme.colors.pureWhite};
        }
        input {
          background-color: transparent;
          border: none;
          height: 19px;
          caret-color: ${DefaultTheme.colors.red};
          caret-shape ::placeholder {
            color: ${DefaultTheme.colors.pureWhite};
            color: rgba(255, 255, 255, 0.5);
          }
          &:focus {
            outline: none;
          }
        }
        span {
          font-size: 13px;
          font-weight: 300;
          color: ${DefaultTheme.colors.red};
        }
      }
      .errorEmail,
      .errorRepeatPassword,
      .errorPassword {
        border-bottom: 1px solid ${DefaultTheme.colors.red};
      }
      button {
        width: 100%;
        height: 48px;
        margin-top: 16px;
        background-color: ${DefaultTheme.colors.red};
        font-family: Outfit;
        font-size: 15px;
        font-weight: 300;
        border-radius: 6px;
        border: none;
        margin-bottom: 24px;
        transition: all 0.5s ease;
        :hover {
          cursor: pointer;
          background-color: ${DefaultTheme.colors.pureWhite};
          color: ${DefaultTheme.colors.darkBlue};
        }
      }
    }
    p {
      font-size: 15px;
      font-weight: 300;
      text-align: center;
      a {
        text-decoration: none;
        color: ${DefaultTheme.colors.red};
        cursor: pointer;
      }
    }
  }
  .note {
    padding: 15px;
    font-size: 15px;
  }
  .note-success {
    background-color: green;
  }
  .note-fail {
    background-color: ${DefaultTheme.colors.red};
  }
  .Toastify__toast-body {
    div {
      color: ${DefaultTheme.colors.darkBlue};
    }
  }

  @media (min-width: 768px) {
    gap: 72.4px;
    padding: 88px 24px 170px 24px;
    height: 100%;
    .container {
      background-color: ${DefaultTheme.colors.semiDarkBlue};
      padding: 32px;
      border-radius: 10px;
      h2 {
        font-size: 32px;
        font-weight: 300;
        letter-spacing: -0.5px;
        margin-bottom: 40px;
      }
      form {
        div {
          width: 336px;
        }
      }
    }
  }
  @media (min-width: 1440px) {
    gap: 82.99px;
    padding: 78.41px 24px 205px 24px;
  }
`;

export default FormPageStyle;
