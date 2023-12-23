import { Navigate } from "react-router-dom";

const Home = () => {
  const Token = localStorage.getItem("authToken");
  if (Token) {
    return <Navigate to="allContent" />;
  } else {
    return <Navigate to="login" />;
  }
};

export default Home;
