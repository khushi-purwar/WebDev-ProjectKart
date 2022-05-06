const Movieslist = {
  trending: "/trending/all/week?api_key={Api}",
  netflixOriginals:
    "/discover/tv?api_key={Api}&page=1&with_networks=213",
  topRated: "/movie/top_rated?api_key=b{Api}&page=2",
  actionMovies:
    "/discover/movie?api_key={Api}&page=1&with_genres=28",
  comedyMovies:
    "/discover/movie?api_key={Api}&page=1&with_genres=35",
  horrorMovies:
    "/discover/movie?api_key={Api}&page=1&with_genres=27",
  romanceMovies:
    "/discover/movie?api_key{Api}&page=1&with_genres=10749",
  documentary:
    "/discover/movie?api_key{Api}&page=1&with_genres=99",
};
export default Movieslist;
