import { useEffect, useState } from "react";
import axios from "axios";
import iconMovies from "../../assets/icon-category-movie.svg";
import iconTvseries from "../../assets/icon-category-tv.svg";
import TrendingStyle from "../styledComponents/TrendingStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import play from "../../assets/icon-play.svg";
import useWindowWidth from "../../Hooks/useWindowWidth";
import { DataType } from "../../Types";
import { authentication } from "../../App";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Trending() {
  const [movies, setMovies] = useState<DataType[]>([]);

  //use UseWindowWidth custom hook;
  const width = useWindowWidth();

  const authContext = useContext(authentication);

  //create get request
  const GetMovies = async () => {
    try {
      const response = await axios.get<DataType[]>(
        `${import.meta.env.VITE_API_URL}/api/getMovies`
      );
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetMovies();
  }, []);

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
    } catch (error) {
      console.log("Error toggling bookmark:", error);
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

  const baseUrl = window.location.origin;

  return (
    <TrendingStyle>
      <h2>Trending</h2>
      <div className="movieContainer">
        <Swiper spaceBetween={10} slidesPerView={"auto"}>
          {movies.map(
            (movie) =>
              movie.isTrending && (
                <SwiperSlide key={movie.id}>
                  <div className="movie">
                    <img
                      src={
                        width < 768
                          ? `${baseUrl}/${movie.thumbnail.trending.small}`
                          : `${baseUrl}/${movie.thumbnail.trending.large}`
                      }
                      alt="background"
                      className="bcImage"
                    />
                    <div className="textBox">
                      <div
                        className="imageBox"
                        onClick={() => UpdateMovie(movie.id)}
                      >
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
                        <img src={play} alt="playIcon" />
                        <span>Play</span>
                      </div>
                      <div className="about">
                        <div className="info">
                          <span>{movie.year}</span>
                          <span className="bullet">&bull;</span>
                          {movie.category === "Movie" && (
                            <img src={iconMovies} alt="iconMovies" />
                          )}
                          {movie.category === "TV Series" && (
                            <img src={iconTvseries} alt="iconTvseries" />
                          )}
                          <span className="bullet">&bull;</span>
                          <span>{movie.category}</span>
                          <span className="bullet">&bull;</span>
                          <span className="rating">{movie.rating}</span>
                        </div>
                        <h5>{movie.title}</h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
          )}
        </Swiper>
        <ToastContainer />
      </div>
    </TrendingStyle>
  );
}

export default Trending;
