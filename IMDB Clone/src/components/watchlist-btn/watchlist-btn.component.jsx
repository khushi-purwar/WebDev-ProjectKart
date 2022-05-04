import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

import { selectCurrentUser } from "redux/user/user.selectors";
import {
  addItemToWatchlist,
  removeItemFromWatchlist,
} from "redux/watchlist/watchlist.actions";
import { WatchlistRibbonSvg } from "../watchlist-item/watchlist-svgs.component";
import { clearSearchData } from "../../redux/search/search.utils";

const WatchlistBtn = ({ collectionItem, selected, svgIcon }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const updateWatchListItems = (item) => {
    if (currentUser) {
      if (selected) {
        dispatch(removeItemFromWatchlist(item));
      } else {
        dispatch(addItemToWatchlist(item));
      }
    } else {
      clearSearchData(dispatch);
      history.push("/register/sign-in");
    }
  };

  return (
    <>
      {svgIcon ? (
        <div
          className="watchlist-ribbon"
          aria-label="add to watchlist"
          role="button"
          tabIndex="0"
          onClick={() => updateWatchListItems(collectionItem)}
        >
          <WatchlistRibbonSvg selectedToggle={selected} />
          <div className="watchlist-ribbon__icon" role="presentation">
            {selected ? (
              <FontAwesomeIcon icon={faCheck} size="sm" color="black" />
            ) : (
              <FontAwesomeIcon icon={faPlus} size="sm" />
            )}
          </div>
        </div>
      ) : (
        <button
          className="watchlist-btn"
          type="button"
          onClick={() => updateWatchListItems(collectionItem)}
        >
          {selected ? (
            <FontAwesomeIcon icon={faCheck} size="sm" />
          ) : (
            <FontAwesomeIcon icon={faPlus} size="sm" />
          )}
          <div className="button-text">Watchlist</div>
        </button>
      )}
    </>
  );
};

export default WatchlistBtn;
