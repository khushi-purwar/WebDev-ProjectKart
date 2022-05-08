import React from "react";
import Cover from "./Cover";
import Rows from "./Rows";
import Movieslist from "./Movieslist";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Cover fetchdata={Movieslist.trending} />
      <Rows
        fetchdata={Movieslist.netflixOriginals}
        title="Netflix Original"
        itsbig={true}
      />
      <Rows fetchdata={Movieslist.topRated} title="Top Rated" />
      <Rows fetchdata={Movieslist.actionMovies} title="Action Movies" />
      <Rows fetchdata={Movieslist.comedyMovies} title="Comedy Movies" />
      <Rows fetchdata={Movieslist.horrorMovies} title="Horror Movies" />
      <Rows fetchdata={Movieslist.romanceMovies} title="Romance Movies" />
      <Rows fetchdata={Movieslist.documentary} title="Documentary" />
    </div>
  );
}

export default App;
