import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import { Navigate } from "react-router-dom";
import Movie from "./pages/Movie";
import TvSeries from "./pages/TvSeries";
import Bookmarks from "./pages/Bookmarks";
import GlobalStyle from "./GlobalStyles";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { createContext } from "react";
import { auth } from "./Types";
export const authentication = createContext<auth | null>(null);
import { useState } from "react";

//App
function App() {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") == "true"
  );
  const contextValue = {
    authenticated,
    setAuthenticated,
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="Movie" element={<Movie />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="TV Series" element={<TvSeries />} />
        <Route path="bookmark" element={<Bookmarks />} />
      </Route>
    )
  );

  return (
    <authentication.Provider value={contextValue}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </authentication.Provider>
  );
}

export default App;
