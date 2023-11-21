import Header from "../Header";
import Layout from "../../styledComponents/Layout";
import Trending from "../Trending";
import SearchBox from "../SearchBox";
import { useState } from "react";

const AllContent = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <Layout>
      <Header />
      <section className="main">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <Trending />
      </section>
    </Layout>
  );
};

export default AllContent;
