import React from 'react'
import "./RowList.css"
import Row from '../Row/Row'
import requests from "../../../utils/requests"
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentary} />
    </>
  );
}

export default RowList

// Summary
// *The RowList component is renders multiple Row components, each representing a different category or genre of movies and TV shows.
// 1. Rendering Multiple Components
// Component Composition: RowList demonstrates how to compose a larger component using multiple smaller components. In this case, it uses the Row component multiple times, each with different props.
// Reusability: By reusing the Row component with different props, RowList effectively creates a list of movie and TV show categories without having to duplicate code.
// 2. Passing Props
// Props Usage: Each Row component is passed different props:
// title: The title of the row, representing the category or genre.
// fetchUrl: The URL used to fetch data for that category. This is a different endpoint for each category, which likely corresponds to different API requests.
// isLargeRow: A boolean prop to determine if the row should display large posters. This is only set to true for the "NETFLIX ORIGINALS" row.
// 3.React Fragments
// React Fragments: The component uses React Fragments (<>...</>) to group the Row components without adding extra DOM elements. This is useful for returning multiple elements from a component without introducing unnecessary HTML elements

// Redeply
// homepge and link
// underscript(
//   predepoly
//   deploy
// )
// deploy gh-pages -d build
// npm run deploy
// build will create