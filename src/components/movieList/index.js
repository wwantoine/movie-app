import React from "react";
import MovieCard from "../movieCard";


const movieList = ({ list, genreList, show, handleShow, handleClose,getVideo,movieKey }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around px-2">
      {list.map((item) => {
        return <MovieCard movie={item} genreList={genreList} show={show} handleClose={handleClose} handleShow={handleShow} getVideo={getVideo} movieKey={movieKey}/>;
      })}
    </div>
  );
};

export default movieList;
