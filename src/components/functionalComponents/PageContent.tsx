/* eslint-disable react-hooks/exhaustive-deps */
import PageContentStyle from "../styledComponents/PageContentStyle";
import { useState, useEffect } from "react";
import { DataType, PagePropsType } from "../../Types";
import axios from "axios";
import useWindowWidth from "../../Hooks/useWindowWidth";
import playIcon from "../../assets/icon-play.svg";
import iconMovies from "../../assets/icon-category-movie.svg";
import iconTvseries from "../../assets/icon-category-tv.svg";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { authentication } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PageContent = (props: PagePropsType) => {
  const [movies, setMovies] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [Update, setUpdate] = useState(false);
  const location = useLocation();

  // useWindowWidth custom hook for responsive site
  const width = useWindowWidth();

  const authContext = useContext(authentication);

  const GetMovies = async () => {
    try {
      const category = location.pathname.slice(1);
      const searchTerm = props.searchValue;
      const isBookmark = category === "bookmark";
      let apiUrl;

      if (isBookmark) {
        // Fetch only movies for bookmark category
        apiUrl = `${import.meta.env.VITE_API_URL}/api/getMovies/?category=${
          props.pathname
        }&searchTerm=${searchTerm}&bookmark=true`;
      } else {
        // Fetch based on the provided category for non-bookmark categories
        apiUrl = `${
          import.meta.env.VITE_API_URL
        }/api/getMovies/?category=${category}&searchTerm=${searchTerm}&bookmark=false`;
      }

      const response = await axios.get<DataType[]>(apiUrl);
      setMovies(response.data);
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetMovies();
  }, [props.searchValue, Update]);

  //print error if error occur while getting data
  if (error) {
    return (
      <p
        style={{
          textAlign: "center",
        }}
      >
        Error: {error}
      </p>
    );
  }

  if (loading) {
    return (
      <p
        style={{
          textAlign: "center",
        }}
      >
        Loading...
      </p>
    );
  }

  //base url
  const baseUrl = window.location.origin;

  //send put request
  const UpdateMovie = async (movieID: string) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/updateMovie/${movieID}`,
        null,
        { withCredentials: true }
      );

      //update movie info and render new info
      const updatedMovies = movies.map((movie) => {
        if (movie.id === movieID) {
          return { ...movie, isBookmarked: response.data.isBookmarked };
        }
        return movie;
      });
      setMovies(updatedMovies);
      setUpdate(!Update);
    } catch (error) {
      console.log(error);
      authContext?.setAuthenticated(false);
      toast.error("Sign In to add Bookmark", {
        position: "bottom-center",
        autoClose: 1000,
        style: {
          backgroundColor: "#10141E",
        },
      });
    }
  };

  return (
    <>
      {movies.length > 0 && (
        <PageContentStyle>
          {movies.length > 0 && !props.searchValue && <h2>{props.header}</h2>}
          {movies.length > 0 && props.searchValue && (
            <h2>{`Found ${movies.length} results for "${props.searchValue}"`}</h2>
          )}
          <div className="movieContainer">
            {movies.map((movie) => (
              <div className="movie" key={movie.id}>
                <div className="imageBox">
                  <img
                    className="movieImage"
                    src={
                      width < 768
                        ? `${baseUrl}/${movie.thumbnail.regular.small}`
                        : width < 1440
                        ? `${baseUrl}/${movie.thumbnail.regular.medium}`
                        : `${baseUrl}/${movie.thumbnail.regular.large}`
                    }
                    alt="movie Image"
                  />
                  <div className="upperLayer">
                    <div onClick={() => UpdateMovie(movie.id)}>
                      {!movie.isBookmarked && (
                        <svg
                          className="bookmarkEmpty"
                          width="12"
                          height="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                            stroke="#FFF"
                            strokeWidth="1.5"
                            fill="none"
                          />
                        </svg>
                      )}
                      {movie.isBookmarked && (
                        <svg
                          className="bookmarkFull"
                          width="12"
                          height="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
                            fill="#FFF"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="playBox">
                      <img src={playIcon} alt="playIcon" />
                      <span>Play</span>
                    </div>
                  </div>
                </div>
                <div className="textBox">
                  <div className="about">
                    {movie.year}
                    <span className="bullet">&bull;</span>
                    {movie.category === "Movie" && (
                      <img src={iconMovies} alt="iconMovies" />
                    )}
                    {movie.category === "TV Series" && (
                      <img src={iconTvseries} alt="iconTvseries" />
                    )}
                    <span className="bullet">&bull;</span>
                    {movie.category}
                    <span className="bullet">&bull;</span>
                    {movie.rating}
                  </div>
                  <h5>{movie.title}</h5>
                </div>
              </div>
            ))}
          </div>
          <ToastContainer />
        </PageContentStyle>
      )}
    </>
  );
};

export default PageContent;
