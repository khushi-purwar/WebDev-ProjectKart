import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../static/assets/logo.png";
import { getSingleDecimalValue } from "../../redux/movies/movies.utils";
import { selectWatchlistItems } from "../../redux/watchlist/watchlist.selectors";
import WatchlistBtn from "components/watchlist-btn/watchlist-btn.component";

const SearchDropdownItem = ({ collection }) => {
  const watchlistItems = useSelector(selectWatchlistItems);

  const { title, poster_path, release_date, vote_average, id } = collection;

  const item = watchlistItems.filter((item) =>
    !!item ? item.id === id : null
  );
  const selected = !!item & item.length ? item[0].selected : null;
  return (
    <div className="search-item" key={id}>
      <img
        src={`${
          poster_path ? `https://image.tmdb.org/t/p/w92/${poster_path}` : Logo
        }`}
        alt={title}
      />
      <div className="details">
        <span className="title">{title}</span>
        <span className={"sub-title"}>
          {release_date && release_date.slice(0, 4)}
        </span>
        <div className={"rating-container"}>
          <div className="rating">
            {getSingleDecimalValue(vote_average)}
            <FontAwesomeIcon icon={faStar} size="sm" />
          </div>
          <WatchlistBtn collectionItem={collection} selected={selected} />
        </div>
      </div>
    </div>
  );
};

export default SearchDropdownItem;
