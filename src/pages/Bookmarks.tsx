import Layout from "../components/styledComponents/Layout";
import Header from "../components/functionalComponents/Header";
import SearchBox from "../components/functionalComponents/SearchBox";
import { useState } from "react";
import PageContent from "../components/functionalComponents/PageContent";

const Bookmarks = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <Layout>
      <Header />
      <section className="main">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <PageContent
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          pathname="Movie"
          header={"Bookmarked Movies"}
        />
        {!searchValue && (
          <PageContent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            pathname="TV Series"
            header={"Bookmarked TV Series"}
          />
        )}
      </section>
    </Layout>
  );
};

export default Bookmarks;
