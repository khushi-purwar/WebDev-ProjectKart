export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const setCurrentAlbum = (albumName) => {
  return {
    type: "SET_CURRENT_ALBUM",
    payload: albumName,
  };
};
