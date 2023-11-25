import Layout from "../../styledComponents/Layout";
import Header from "../Header";
import SearchBox from "../SearchBox";
import { useState } from "react";
import PageContent from "../PageContent";
import { useLocation } from "react-router-dom";

const Bookmarks = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const location = useLocation();
  return (
    <Layout>
      <Header />
      <section className="main">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <PageContent
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          pathname={`${location.pathname}/Movies`}
          header={"Bookmarked Movies"}
        />
        <PageContent
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          pathname={`${location.pathname}/tvSeries`}
          header={"Bookmarked TV Series"}
        />
      </section>
    </Layout>
  );
};

export default Bookmarks;
