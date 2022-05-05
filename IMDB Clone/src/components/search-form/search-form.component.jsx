import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Form from "react-bootstrap/Form";

import SearchDropdown from "../search-dropdown/search-dropdown.component";

import {
  selectMoviesCollection,
  selectSearchInput,
  selectIsSearchExpanded,
} from "../../redux/search/search.selectors";

import Search from "../search/search.component";

const SearchForm = ({ collections, searchEntry, isSearchExpanded }) => {
  return (
    <Form inline>
      <Search searchEntry={searchEntry} isSearchExpanded={isSearchExpanded} />
      <SearchDropdown collections={collections} searchEntry={searchEntry} />
    </Form>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectMoviesCollection,
  searchEntry: selectSearchInput,
  isSearchExpanded: selectIsSearchExpanded,
});

export default connect(mapStateToProps)(SearchForm);
