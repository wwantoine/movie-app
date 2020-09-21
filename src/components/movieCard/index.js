import React from "react";
import { Card } from "react-bootstrap";
import styles from "./movieCard.module.css";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card className={styles.whole_card}>
        <div className={styles.img__wrap}>
          <Card.Img
            variant="top"
            className={styles.img_size}
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          />
          <div className={styles.img__description_layer}>
            <p className={styles.img__description}>{movie.overview}</p>
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
    </div>
  );
};

export default MovieCard;
