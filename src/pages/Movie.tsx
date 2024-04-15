import Header from "../components/functionalComponents/Header";
import Layout from "../components/styledComponents/Layout";
import SearchBox from "../components/functionalComponents/SearchBox";
import PageContent from "../components/functionalComponents/PageContent";
import { useState } from "react";

const Movie = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <Layout>
      <Header />
      <section className="main">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <PageContent
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          pathname={location.pathname}
          header="Movies"
        />
      </section>
    </Layout>
  );
};

export default Movie;
