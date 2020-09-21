import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-input-range/lib/css/index.css";
import MovieList from "./components/movieList";
import Navigation from "./components/navigation";
import FilterMenu from "./components/filterMenu";
import { Button } from "react-bootstrap";

const apikey = process.env.REACT_APP_APIKEY;

function App() {
  let [movieList, setMovieList] = useState([]);
  let [pageTitle, setPageTitle] = useState("Now Playing Movies");
  let [rating, setRating] = useState({ min: 0, max: 10 });
  let [pageNumber, setPageNumber] = useState(1);

  const loadMore = () => {
    pageNumber++;
    setPageNumber(pageNumber);
    getLatestMovies(pageNumber);
    setMovieList([...movieList]);
  };

  const getLatestMovies = async (pageNumber) => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=${pageNumber}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setMovieList(data.results);
    setPageTitle("Now Playing Movies");
  };

  const getPopularMovies = async () => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setMovieList(data.results);
    setPageTitle("Popular Movies");
  };

  const getUpcomingMovies = async () => {
    let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setMovieList(data.results);
    setPageTitle("Upcoming Movies");
  };

  const getTopRatedMovies = async () => {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setMovieList(data.results);
    setPageTitle("Top Rated Movies");
  };

  const searchByKeyword = async (keyword) => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    setMovieList(data.results);
  };

  let filterByRating = (rating) => {
    setRating(rating);
    let filteredList = movieList.filter((movie) => {
      return (
        movie.vote_average >= rating.min && movie.vote_average <= rating.max
      );
    });
    setMovieList(filteredList);
  };

  const sortByRating = (sortOrder) => {
    let sortedList;
    if (sortOrder === "ascending") {
      sortedList = movieList.sort((a, b) => a.vote_average - b.vote_average);
    } else {
      sortedList = movieList.sort((a, b) => b.vote_average - a.vote_average);
    }
    setMovieList([...sortedList]);
  };

  const sortByPopular = (sortOrder) => {
    let sortedList;
    if (sortOrder === "ascending") {
      sortedList = movieList.sort((a, b) => a.popularity - b.popularity);
    } else {
      sortedList = movieList.sort((a, b) => b.popularity - a.popularity);
    }
    setMovieList([...sortedList]);
  };

  useEffect(() => {
    getLatestMovies(pageNumber);
  }, []);

  return (
    <div>
      <Navigation
        searchByKeyword={searchByKeyword}
        getPopularMovies={getPopularMovies}
        getLatestMovies={getLatestMovies}
        getUpcomingMovies={getUpcomingMovies}
        getTopRatedMovies={getTopRatedMovies}
      />
      <div className="container my-2">
        <h1>{pageTitle}</h1>
        <div className="d.flex row no-gutters my-4">
          <FilterMenu
            sortByRating={sortByRating}
            sortByPopular={sortByPopular}
            filterByRating={filterByRating}
            rating={rating}
          />
          <div>
            <MovieList list={movieList} />
            <Button variant="primary" size="lg" onClick={() => loadMore()}>
              Load More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
