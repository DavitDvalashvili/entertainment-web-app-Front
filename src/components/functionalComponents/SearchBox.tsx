import styled from "styled-components";
import search from "../../assets/icon-search.svg";
import { searchPropsType } from "../../Types";
import DefaultTheme from "../../DefaultTheme";

const SearchBox = (props: searchPropsType) => {
  return (
    <StyledBox>
      <img src={search} alt="searchIcon" />
      <input
        type="text"
        name="search"
        onChange={(e) => {
          props.setSearchValue(e.target.value);
        }}
        placeholder="Search for movies or TV series"
      />
    </StyledBox>
  );
};

export default SearchBox;

const StyledBox = styled.div`
  background-color: ${DefaultTheme.colors.darkBlue};
  margin: 24px 16px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 16px;
  img {
    width: 24px;
  }
  input {
    background-color: transparent;
    width: 100%;
    border: none;
    font-size: 24px;
    &:focus {
      outline: none;
    }
    ::placeholder {
      font-size: 16px;
      font-weight: 300;
      opacity: 0.4979;
    }
  }
  @media (min-width: 768px) {
    margin: 33px 24px;
    gap: 24px;
    img {
      width: 32px;
    }
    input {
      height: 30px;
      font-size: 24px;
      ::placeholder {
        font-size: 24px;
      }
    }
  }
  @media (min-width: 1440px) {
    margin: 64px 36px 34px 36px;
  }
`;
