import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-input-range/lib/css/index.css";
import "./App.css";
import MovieList from "./components/movieList";
import Navigation from "./components/navigation";
import FilterMenu from "./components/filterMenu";
import Pagination from "react-js-pagination";

const apikey = process.env.REACT_APP_APIKEY;

function App() {
  let [unfilteredList, setUnfilteredList] = useState([]);
  let [movieList, setMovieList] = useState([]);
  let [pageTitle, setPageTitle] = useState("Now Playing Movies");
  let [rating, setRating] = useState({ min: 0, max: 10 });
  let [pageNumber, setPageNumber] = useState(1);
  let [totalResults, setTotalResults] = useState(0);
  let [show, setShow] = useState(false);
  let [movieKey, setMovieKey] = useState("");
  let [genreList, setGenreList] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getVideo = async (movieId) => {
    let url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apikey}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("video", data.results[0].key);
    setMovieKey(data.results[0].key);
  };

  const getLatestMovies = async (pageNumber) => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=${pageNumber}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setMovieList(data.results);
    setTotalResults(data.total_results);
    setUnfilteredList(data.results);
    setPageTitle("Now Playing Movies");
  };

  const getPopularMovies = async () => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setMovieList(data.results);
    setTotalResults(data.total_results);
    setUnfilteredList(data.results);
    setPageTitle("Popular Movies");
  };

  const getUpcomingMovies = async () => {
    let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setMovieList(data.results);
    setTotalResults(data.total_results);
    setUnfilteredList(data.results);
    setPageTitle("Upcoming Movies");
  };

  const getTopRatedMovies = async () => {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setMovieList(data.results);
    setTotalResults(data.total_results);
    setUnfilteredList(data.results);
    setPageTitle("Top Rated Movies");
  };

  const searchByKeyword = async (keyword) => {
    if (keyword !== "") {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;
      let response = await fetch(url);
      let data = await response.json();
      setMovieList(data.results);
      setTotalResults(data.total_results);
      setUnfilteredList(data.results);
    }
  };

  const filterByGenre = async (genreName) => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=${genreName}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("genre", data);
    setMovieList(data.results);
    // if (data.with_genres.includes("genreName")) {
    //   setMovieList(data.results);
    // }
  };

  let filterByRating = (rating) => {
    setRating(rating);
    let filteredList = unfilteredList.filter((movie) => {
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
    } else if (sortOrder === "descending") {
      sortedList = movieList.sort((a, b) => b.vote_average - a.vote_average);
    }
    setMovieList([...sortedList]);
  };

  const sortByPopular = (sortOrder) => {
    let sortedList;
    if (sortOrder === "ascending") {
      sortedList = movieList.sort((a, b) => a.popularity - b.popularity);
    } else if (sortOrder === "descending") {
      sortedList = movieList.sort((a, b) => b.popularity - a.popularity);
    }
    setMovieList([...sortedList]);
  };

  const getGenreList = async () => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("genre list", data.genres);
    setGenreList(data.genres);
  };

  useEffect(() => {
    getGenreList();
    getLatestMovies(1);
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
      <Container className="my-2">
        <h1>{pageTitle}</h1>

        <Row noGutters={true} className="d.flex my-4">
          <Col md={3}>
            <FilterMenu
              sortByRating={sortByRating}
              sortByPopular={sortByPopular}
              filterByRating={filterByRating}
              rating={rating}
              filterByGenre={filterByGenre}
            />
          </Col>
          <Col md={9} sm={12}>
            <MovieList
              list={movieList}
              show={show}
              handleClose={handleClose}
              handleShow={handleShow}
              getVideo={getVideo}
              movieKey={movieKey}
              genreList={genreList}
            />
            <Pagination
              activePage={pageNumber}
              itemsCountPerPage={20}
              totalItemsCount={totalResults}
              pageRangeDisplayed={5}
              onChange={(page) => {
                setPageNumber(page);
                getLatestMovies(page);
              }}
              itemClass="page-item"
              linkClass="page-link"
              style={{ justifyContent: "center" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
