import {
  clearSearchEntry,
  clearSearchCollections,
  expandSearchInput,
} from "./search.actions";

export const clearSearchData = (dispatch) => {
  dispatch(clearSearchEntry());
  dispatch(clearSearchCollections());
  dispatch(expandSearchInput(false));
};
