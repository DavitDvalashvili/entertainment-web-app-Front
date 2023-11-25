import Header from "../Header";
import Layout from "../../styledComponents/Layout";
import Trending from "../Trending";
import SearchBox from "../SearchBox";
import { useState } from "react";
import PageContent from "../PageContent";

const AllContent = () => {
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
        />
      </section>
    </Layout>
  );
};

export default AllContent;
