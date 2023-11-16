import { useState, useEffect, createContext } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AllContent from "./components/pages/AllContent";
import Movies from "./components/pages/Movies";
import TvSeries from "./components/pages/TvSeries";
import Bookmarks from "./components/pages/Bookmarks";
import GlobalStyle from "./GlobalStyles";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import Preloader from "./components/functionalComponents/Preloader";
import { UserContextType } from "./Types";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home/>}/>
      <Route path="login" element={<Login />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="AllContent" element={<AllContent />} />
      <Route path="movies" element={<Movies />} />
      <Route path="tvSeries" element={<TvSeries />} />
      <Route path="bookmarks" element={<Bookmarks />} />
    </Route>
  )
);

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext<undefined | UserContextType>(undefined);

function App() {
  const [load, setLoad] = useState(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const contextValue ={
    email,
    setEmail,
    password,
    setPassword,
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <GlobalStyle/>
      <Preloader load={load}/>
      <userContext.Provider value={contextValue}>
      <RouterProvider router={router} />
      </userContext.Provider>
    </>
  );
}

export default App;
