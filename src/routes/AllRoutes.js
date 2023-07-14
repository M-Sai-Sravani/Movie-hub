import { Routes, Route } from "react-router-dom"
import { MovieList, MovieItem, Search, PageNotFound } from "../pages"

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
        />
        <Route path="/movie/:id" element={<MovieItem />} />
        <Route
          path="/movies/popular"
          element={<MovieList apiPath="movie/popular" title="Popular" />}
        />
        <Route
          path="/movies/top"
          element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="/movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="Upcoming" />}
        />
        <Route
          path="/search"
          element={<Search apiPath="search/movie" query="" />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
