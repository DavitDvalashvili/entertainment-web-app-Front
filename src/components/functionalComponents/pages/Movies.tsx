import Header from "../Header";
import Layout from "../../styledComponents/Layout";
import SearchBox from "../SearchBox";
import PageContent from "../PageContent";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Movies = () => {
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
          pathname={location.pathname}
          header="Movies"
        />
      </section>
    </Layout>
  );
};

export default Movies;
