import Header from "../Header";
import Layout from "../../styledComponents/Layout";
import SearchBox from "../SearchBox";
import PageContent from "../PageContent";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const TvSeries = () => {
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
          pathname={location.pathname}
          header="TV Series"
        />
      </section>
    </Layout>
  );
};

export default TvSeries;
