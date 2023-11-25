import styled from "styled-components";
import DefaultTheme from "../../DefaultTheme";

const TrendingStyle = styled.section`
  padding-left: 16px;
  overflow-x: hidden;
  h2 {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -0.312px;
    margin-bottom: 16px;
  }
  .swiper-wrapper {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 6px;
    .movie {
      border-radius: 8px;
      width: 240px;
      height: 140px;
      overflow: hidden;
      position: relative;
      .bcImage {
        width: 100%;
        height: 100%;
      }
      .textBox {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        padding: 8px 8px 16px 16px;
        transition: all 0.3s ease;
        cursor: pointer;
        .imageBox {
          background-color: black;
          opacity: 0.500647;
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
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          margin: 0px auto 8px auto;
          img {
            width: 19.5px;
            display: none;
          }
          span {
            display: none;
          }
        }
        .about {
          h5 {
            font-size: 15px;
            font-weight: 500;
            margin-top: 4px;
          }
          .info {
            font-size: 12px;
            font-weight: 300;
            opacity: 0.75;
            display: flex;
            align-items: center;
            justify-content: left;
            gap: 6px;
          }
        }
        :hover {
          background-color: rgba(0, 0, 0, 0.5);
          .playBox {
            background-color: rgba(255, 255, 255, 0.45);
            img,
            span {
              display: inline-block;
            }
          }
        }
      }
      :hover {
        .bcImage {
          transform: scale(1.2) translateZ(0);
          transition: all 0.5s ease-out;
        }
      }
    }
  }
  @media (min-width: 768px) {
    padding-left: 24px;
    h2 {
      font-size: 30px;
      letter-spacing: -0.5px;
      margin-bottom: 25px;
    }
    .swiper-wrapper {
      gap: 30px;
      .movie {
        width: 470px;
        height: 230px;
        .textBox {
          padding: 16px 24px 24px 24px;
          .playBox {
            width: 117px;
            height: 48px;
            border-radius: 30px;
            justify-content: space-between;
            padding: 9px;
            font-size: 18px;
            font-weight: 500;
            margin-top: 43px;
            margin-bottom: 15px;
            img {
              width: 30px;
              display: none;
            }
            span {
              display: none;
              margin-right: 15px;
            }
          }
          .about {
            h5 {
              font-size: 24px;
            }
            .info {
              font-size: 15px;
              gap: 8px;
            }
          }
        }
      }
    }
  }
`;

export default TrendingStyle;
