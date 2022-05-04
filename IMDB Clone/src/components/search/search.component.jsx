import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FormControl from "react-bootstrap/FormControl";

import {
  searchInput,
  fetchSearchMovieStart,
  expandSearchInput,
} from "../../redux/search/search.actions";

import {
  SearchButtonSvg,
  DropDownIconSvg,
} from "../layout/header/header-svgs.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { clearSearchData } from "../../redux/search/search.utils";

const Search = ({ searchEntry, isSearchExpanded }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchQuery.length > 0) {
      dispatch(searchInput(searchQuery));
      dispatch(fetchSearchMovieStart());
    } else {
      clearSearchData(dispatch);
    }
  }, [searchQuery, dispatch]);

  return (
    <>
      <div className="search-category-selector">
        <span>All</span>
        <DropDownIconSvg />
      </div>
      <div className="search-input-container">
        <FormControl
          type="text"
          placeholder="Search IMDb"
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`${isSearchExpanded ? "search-sm" : null}`}
        />
        <FontAwesomeIcon
          icon={faTimes}
          color="white"
          size="1x"
          className={`${
            isSearchExpanded
              ? "cancel-search-expanded cancel-search"
              : "cancel-search"
          }`}
          onClick={() => {
            clearSearchData(dispatch);
            dispatch(expandSearchInput(false));
          }}
        />
      </div>

      <div className="search-btn-container">
        <button
          type="button"
          className={`${
            isSearchExpanded ? "display-none search-button" : "search-button"
          }`}
          onClick={() => dispatch(expandSearchInput(true))}
        >
          <SearchButtonSvg />
        </button>
      </div>
      <div
        className={`${searchEntry && !isSearchExpanded ? "overlay" : null}`}
        onClick={() => clearSearchData(dispatch)}
      ></div>
    </>
  );
};

export default Search;
