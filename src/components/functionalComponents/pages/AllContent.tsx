import Header from "../Header";
import Layout from "../../styledComponents/Layout";
import Trending from "../Trending";
import SearchBox from "../SearchBox";
import { useEffect, useState } from "react";
import PageContent from "../PageContent";
import { useNavigate } from "react-router-dom";

const AllContent = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const [expired, setExpired] = useState(false);
  const Token = localStorage.getItem("authToken");
  useEffect(() => {
    if (!Token) {
      navigate("/login");
      setExpired(true);
    }
  }, [Token, expired, navigate]);

  return (
    <Layout>
      <Header expired={expired} setExpired={setExpired} />
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

export default AllContent;
