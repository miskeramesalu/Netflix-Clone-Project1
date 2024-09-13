import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {//Three props(properties),these props are used to customize commponents behaviour and rendering, using pros to pass data and congiguration commponents 
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";//base url of image and get from tmdb=>configuration=>details=>try=copy

  useEffect(() => {
// useEffect is used to perform side effects, such as data fetching.
// The hook has [fetchUrl] as its dependency array, meaning it will re-run the effect whenever fetchUrl changes.
// An immediately invoked async function fetches data from the API using axios and updates the movies state with the results.
// error handle with a try-catch block.
    (async () => {
      try {
        console.log(fetchUrl)
        const request = await axios.get(fetchUrl);
        console.log(request)
        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
// Event Handling: handleClick is a function that toggles the trailer URL for the selected movie. 
// event handle uses to respond to users actions and update the state accordingly
// Dynamic URL Extraction: It extracts the video ID from the URL returned by movieTrailer.
    if (trailerUrl) {
      //If a trailer is already displayed (trailerUrl is not empty), it clears the trailer URL.
      // Otherwise, it fetches the trailer URL using the movieTrailer function and sets it in the state.
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
{/*The component maps over the movies array to render a list of <img> elements. 
The src attribute of the images is dynamically set based on whether isLargeRow is true or false.
Trailer Display: Conditionally renders the <YouTube> component if trailerUrl is set. */}

        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;

// Summary
// From the Row component, I was learned:

// Using Props: To pass data and configuration to components.
// State Management: With useState to handle dynamic data and user interactions.
// Side Effects: With useEffect for fetching data and managing component lifecycle events.
// Event Handling: To respond to user actions and update the state accordingly.
// Conditional Rendering: To display content based on the current state.
// External Libraries: Such as axios for making HTTP requests and YouTube for embedding video content