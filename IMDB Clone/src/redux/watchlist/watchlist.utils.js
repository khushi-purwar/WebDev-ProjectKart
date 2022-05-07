export const addItem = (watchlistItems, watchlistItemToAdd) => {
  if (!!watchlistItems && !watchlistItems.length) {
    watchlistItemToAdd.selected = true;
    watchlistItems = [watchlistItemToAdd];
  }

  if (!watchlistItems.includes(watchlistItemToAdd)) {
    watchlistItemToAdd.selected = true;
    watchlistItems.push(watchlistItemToAdd);
  }

  return [...watchlistItems];
};

export const removeItem = (watchlistItems, watchlistItemToRemove) => {
  if (!!watchlistItems && !watchlistItems.length) return;

  return watchlistItems.length === 1
    ? []
    : watchlistItems.filter((item) => item.id !== watchlistItemToRemove.id);
};
