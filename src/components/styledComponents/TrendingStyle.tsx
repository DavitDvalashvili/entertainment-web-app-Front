import styled from "styled-components";

const TrendingStyle = styled.section`
  padding-left: 16px;
  background-color: green;
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
      width: 240px;
      height: 140px;
      border-radius: 8px;
      background-color: blue;
      .imageBox {
        svg {
          //margin-right: 200px;
        }
      }
    }
  }
`;

export default TrendingStyle;
