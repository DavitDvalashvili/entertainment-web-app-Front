import Header from "../components/functionalComponents/Header";
import Layout from "../components/styledComponents/Layout";
import Trending from "../components/functionalComponents/Trending";
import SearchBox from "../components/functionalComponents/SearchBox";
import { useState } from "react";
import PageContent from "../components/functionalComponents/PageContent";

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <Layout>
      <Header />
      <section className="main">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        {!searchValue && <Trending />}
        <PageContent
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          pathname={"/"}
          header="Recommended for you"
        />
      </section>
    </Layout>
  );
};

export default Home;
