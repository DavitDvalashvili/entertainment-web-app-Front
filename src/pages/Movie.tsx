import Header from "../components/functionalComponents/Header";
import Layout from "../components/styledComponents/Layout";
import SearchBox from "../components/functionalComponents/SearchBox";
import PageContent from "../components/functionalComponents/PageContent";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Movie = () => {
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
