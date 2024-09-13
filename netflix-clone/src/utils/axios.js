import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

  // summary
  // what I learn from axios.js
  // *Js library
  // *Use for making HTTP requests
  // exportable to other parts of application
  // baseurl get from tmdb