import React from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import { getSingleDecimalValue } from "../../redux/movies/movies.utils";

import { removeItemFromWatchlist } from "../../redux/watchlist/watchlist.actions";

const WatchlistItem = ({ item }) => {
  const { poster_path, title, name, vote_average, release_date } = item;
  const dispatch = useDispatch();
  return (
    <div className="watchlist-item">
      <div className="image-item">
        <img
          src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
          alt={title}
        />
        <FontAwesomeIcon
          className="remove-item"
          icon={faTimesCircle}
          size="sm"
          onClick={() => dispatch(removeItemFromWatchlist(item))}
        />
      </div>
      <div className="featured-details">
        <span>{title || name}</span>
        <div className="info">
          <div className="rating">
            <span>{getSingleDecimalValue(vote_average)}</span>
            <FontAwesomeIcon icon={faStar} size="sm" />
          </div>
          <span>{release_date.slice(0, 4)}</span>
        </div>
      </div>
    </div>
  );
};

export default WatchlistItem;
