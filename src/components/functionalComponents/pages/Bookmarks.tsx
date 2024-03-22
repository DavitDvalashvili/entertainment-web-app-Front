import Layout from "../../styledComponents/Layout";
import Header from "../Header";
import SearchBox from "../SearchBox";
import { useState, useEffect } from "react";
import PageContent from "../PageContent";
import { useLocation, useNavigate } from "react-router-dom";

const Bookmarks = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const location = useLocation();

  const [expired, setExpired] = useState(false);
  const Token = localStorage.getItem("authToken");
  const navigate = useNavigate();
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
        <PageContent
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          pathname={`${location.pathname}/Movies`}
          header={"Bookmarked Movies"}
        />
        {!searchValue && (
          <PageContent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            pathname={`${location.pathname}/tvSeries`}
            header={"Bookmarked TV Series"}
          />
        )}
      </section>
    </Layout>
  );
};

export default Bookmarks;
