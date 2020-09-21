import React from "react";
import InputRange from "react-input-range";
import { Dropdown } from "react-bootstrap";
import styles from "./filterMenu.module.css";

const FilterMenu = ({
  sortByRating,
  sortByPopular,
  filterByRating,
  rating,
}) => {
  return (
    <div>
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
  );
};

export default FilterMenu;
