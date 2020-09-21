import React from "react";
import MovieCard from "../movieCard";

const movieList = ({ list, genreList }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around px-2">
      {list.map((item) => {
        return <MovieCard movie={item} genreList={genreList} />;
      })}
    </div>
  );
};

export default movieList;
