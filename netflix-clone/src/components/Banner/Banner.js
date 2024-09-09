import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        const results = response.data.results;
        if (results.length>0) {
          setMovie(results[Math.floor(Math.random() * results.length)]);
        }
      } catch (error) {
        console.log("Failed to fetch movie", error);
      }
    };

    fetchMovie();
  }, []);

  function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + '...': str;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadeBottom"></div>
    </div>
  );
};

export default Banner;
