import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'react-bootstrap';
import MovieList from "./components/movieList"
import Navigation from "./components/navigation"
import FilterMenu from "./components/filterMenu"

const apikey = process.env.REACT_APP_APIKEY

function App() {
  let [movieList, setMovieList] = useState([])

  const getLastestMovies = async () => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`;
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setMovieList(data.results)
  }

  const getPopularMovies = async () => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setMovieList(data.results)
  }

  const getUpcomingMovies = async () => {
    let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`;
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setMovieList(data.results)
  }


  const getTopRatedMovies = async () => {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`;
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setMovieList(data.results)
  }

  const searchByKeyword = async (keyword) => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`
    let response = await fetch(url)
    let data = await response.json()
    setMovieList(data.results)
  }

  useEffect(() => {
    getLastestMovies();
  }, [])



  return (
    <div>
      <Navigation searchByKeyword={searchByKeyword} getPopularMovies={getPopularMovies} getUpcomingMovies={getUpcomingMovies} getTopRatedMovies={getTopRatedMovies} />
      <div className="d.flex row no-gutters my-4">
        <FilterMenu />
        <MovieList list={movieList} />
      </div>
    </div>
  );
}

export default App;
