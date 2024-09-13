import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "../Banner/Banner.css"

const Banner = () => {
    const [movie, setMovie] = useState({});//array destructing to unpack the two values returened by useState,the current value movie and updated value SetMovie
    useEffect(() => {//to manage side effect in functional component
        (async () => {//useful to handeling asynchronous code through await syntax, always returns promise, use await until promise resolves
            try {
                const request = await axios.get(requests.fetchNetflixOriginals)
                // await used to await for a promise to resolve before proceeding with the excution of the code and used to for HTTP request to complete and resolve the response object
                //data fetch from API using axios 
                setMovie(
                  request.data.results[
                    Math.floor(Math.random() * request.data.results.length) //use Effect update the movie state with a random movie from the response with limited number.
                  ]
                );
            } catch (error) {
              //handle potential errors from the API request using a try-catch block
              console.log("error", error);
            }
        })()
    }, []);

    function truncate(str, n) {
      //truncate function that shortens long text and adds an ellipsis (...) if the text exceeds a specified length (n). This function is used to limit the length of the movie's overview.
      //the practice of limiting the length of string or text content for display purpose
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  return (
    <div
      className="banner" //The component renders a banner with a background image, title, buttons, and a description. The background image URL is dynamically set using the movie's backdrop_path.
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
          {/* //movie?, checks if the movie object exists and if it has a title
          propert. Similarly, movie?.name and movie?.original_name are checked in the same way. */}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
}

export default Banner