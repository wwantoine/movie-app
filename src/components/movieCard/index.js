import React from "react";
import { Card, Modal, Button, Badge } from "react-bootstrap";
import YouTube from "@u-wave/react-youtube";
import styles from "./movieCard.module.css";

const MovieCard = ({
  movie,
  genreList
  show,
  handleShow,
  handleClose,
  getVideo,
  movieKey,
}) => {
  if (genreList == null || genreList.length < 1) {
    return <div>Loading</div>;
  }
  return (
    <div>
      {/* below is modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouTube video={movieKey} autoplay />
        </Modal.Body>
      </Modal>
      {/* end of modal */}

      <Card className={styles.whole_card}>
        <div className={styles.img__wrap}>
          <Card.Img
            variant="top"
            className={styles.img_size}
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          />
          <div className={styles.img__description_layer}>
            <p
              className={styles.img__description}
              onClick={() => {
                handleShow();
                getVideo(movie.id);
              }}
            >
              {movie.overview}
            {movie.genre_ids.map((id) => {
              return (
                <Badge variant="danger">
                  {genreList.find((item) => item.id === id).name}
                </Badge>
              );
            })}
            </p>
          </div>
        </div>
      </div>
      <Card.Body className={styles.lower_card}>
        <Card.Title className={styles.movie_title}>{movie.title}</Card.Title>
        <div className="row no-gutters">
          <div className="col-10">
            <Card.Text>{movie.release_date}</Card.Text>
          </div>
          <div className={styles.movie_rating}>{movie.vote_average}</div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
