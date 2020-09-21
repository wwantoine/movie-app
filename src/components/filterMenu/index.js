import React from "react";
import InputRange from "react-input-range";
import { Dropdown } from "react-bootstrap";
import styles from "./filterMenu.module.css";

const FilterMenu = ({
  sortByRating,
  sortByPopular,
  filterByRating,
  rating,
  filterByGenre,
}) => {
  return (
    <div className="col-md-3">
      <Dropdown style={{ width: "100%" }}>
        <Dropdown.Toggle variant="primary" style={{ width: "100%" }}>
          Sort By
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ width: "100%" }}>
          <Dropdown.Item
            href="#/sortByRating-desc"
            onClick={() => sortByRating("descending")}
          >
            Rating Descending
          </Dropdown.Item>
          <Dropdown.Item
            href="#/sortByRating-asc"
            onClick={() => sortByRating("ascending")}
          >
            Rating Ascending
          </Dropdown.Item>
          <Dropdown.Item
            href="#/sortByPopular-desc"
            onClick={() => sortByPopular("descending")}
          >
            Popularity Descending
          </Dropdown.Item>
          <Dropdown.Item
            href="#/sortByPopular-asc"
            onClick={() => sortByPopular("ascending")}
          >
            Popularity Ascending
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div style={{ marginBottom: "20px" }}>
        <div className={styles.filter_slider}>
          <div>Filter By Rating:</div>
          <div style={{ margin: "0px 10px" }}>
            <InputRange
              maxValue={10}
              minValue={0}
              value={rating}
              onChange={(rating) => filterByRating(rating)}
            />
          </div>
        </div>
      </div>

      <Dropdown style={{ width: "100%" }}>
        <Dropdown.Toggle variant="primary" style={{ width: "100%" }}>
          Sort By Genre
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ width: "100%" }}>
          <Dropdown.Item
            href="#/sortByRating-desc"
            onClick={() => filterByGenre(28)}
          >
            Action
          </Dropdown.Item>
          <Dropdown.Item
            href="#/sortByRating-desc"
            onClick={() => filterByGenre(12)}
          >
            Adventure
          </Dropdown.Item>
          <Dropdown.Item
            href="#/sortByRating-desc"
            onClick={() => filterByGenre(16)}
          >
            Animation
          </Dropdown.Item>
          <Dropdown.Item
            href="#/sortByRating-desc"
            onClick={() => filterByGenre(35)}
          >
            Comedy
          </Dropdown.Item>

          <Dropdown.Item
            href="#/sortByRating-desc"
            onClick={() => filterByGenre(80)}
          >
            Crime
          </Dropdown.Item>
          <Dropdown.Item
            href="#/sortByRating-desc"
            onClick={() => filterByGenre(99)}
          >
            Documentary
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default FilterMenu;
