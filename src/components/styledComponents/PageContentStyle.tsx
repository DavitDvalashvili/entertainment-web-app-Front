import styled from "styled-components";
import DefaultTheme from "../../DefaultTheme";

const PageContentStyle = styled.section`
  padding: 24px 16px 38px 16px;
  h2 {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -0.312px;
    margin-bottom: 24px;
  }
  .movieContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 15px;
    column-gap: 16px;
    .movie {
      .imageBox {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        :hover {
          .movieImage {
            transform: scale(1.2) translateZ(0);
            transition: all 0.5s ease-out;
          }
        }
        .movieImage {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          margin-bottom: -4px;
        }
        .upperLayer {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          border-radius: 8px;
          padding: 8px;
          transition: all 0.3s ease;
          div {
            background-color: rgba(0, 0, 0, 0.5);
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: auto;
            cursor: pointer;
            transition: all 0.5s ease-in-out;
            &:hover {
              svg {
                path {
                  stroke: black;
                }
              }
              background-color: ${DefaultTheme.colors.pureWhite};
            }
          }
          .playBox {
            width: 76.05px;
            height: 32.64px;
            border-radius: 30px;
            margin: auto;
            top: 50%;
            left: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
            display: none;
            img {
              width: 19.5px;
            }
          }
          :hover {
            background-color: rgba(0, 0, 0, 0.5);
            .playBox {
              background-color: rgba(255, 255, 255, 0.45);
              display: flex;
              justify-content: space-evenly;
              align-items: center;
            }
          }
        }
      }
      .textBox {
        .about {
          font-size: 11px;
          font-weight: 300;
          opacity: 0.75;
          margin: 8px 0px 4px 0px;
          display: flex;
          justify-content: left;
          align-items: center;
          gap: 6px;
        }
        h5 {
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }
  @media (min-width: 768px) {
    padding: 39px 24px 56px 24px;
    h2 {
      font-size: 32px;
      font-weight: 300;
      letter-spacing: -0.5px;
    }
    .movieContainer {
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 24px;
      column-gap: 30px;
      .movie {
        .imageBox {
          .upperLayer {
            padding: 16px;
          }
        }
        .textBox {
          .about {
            font-size: 13px;
            margin: 8px 0px 5px 0px;
            gap: 8px;
          }
          h5 {
            font-size: 18px;
          }
        }
      }
    }
  }
  @media (min-width: 1440px) {
    padding: 40px 36px 52px 36px;
    .movieContainer {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      row-gap: 32px;
      column-gap: 40px;
      .movie {
        .imageBox {
          .upperLayer {
            cursor: pointer;
            padding: 16px;
            .playBox {
              width: 117px;
              height: 48px;
              justify-content: center;
              gap: 19px;
              padding: 9px;
              img {
                width: 30px;
              }
              span {
                font-size: 18px;
              }
            }
          }
        }
        .textBox {
          .about {
            font-size: 13px;
            margin: 8px 0px 5px 0px;
            gap: 8px;
          }
          h5 {
            font-size: 18px;
          }
        }
      }
    }
  }
`;

export default PageContentStyle;
