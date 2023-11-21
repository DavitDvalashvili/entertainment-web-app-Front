import React, { useEffect, useState } from "react";
import axios from "axios";
import iconMovies from "../../assets/icon-nav-movies.svg";
import iconTvseries from "../../assets/icon-nav-tv-series.svg";
import TrendingStyle from "../styledComponents/TrendingStyle";
//import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

interface ThumbnailType {
  small: string;
  medium?: string;
  large: string;
  _id: string;
}

interface DataType {
  thumbnail: {
    trending: ThumbnailType;
    regular: ThumbnailType;
  };
  title: string;
  year: number;
  category: string;
  rating: string;
  isTrending: boolean;
  isBookmarked: boolean;
  id: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<DataType[]>("http://localhost:3003");
        setMovies(response.data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <TrendingStyle>
      <h2>Trending</h2>
      <div className="movieContainer">
        <Swiper spaceBetween={10} slidesPerView={"auto"}>
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="movie">
                <div className="imageBox">
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
                </div>
                <div className="about">
                  <div className="info">
                    <div>
                      <span>{movie.year}</span>
                      <span className="bullet">&bull;</span>
                      {movie.category === "Movie" && (
                        <img src={iconMovies} alt="iconMovies" />
                      )}
                      {movie.category === "TV Series" && (
                        <img src={iconTvseries} alt="iconTvseries" />
                      )}
                      <span>{movie.category}</span>
                    </div>
                    <h5>{movie.title}</h5>
                  </div>
                  <span className="rating">{movie.rating}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </TrendingStyle>
  );
};

export default MovieList;
