import React from "react";
import "./Dialogb.css";
function Dialogb(props) {
  const titles = props.movies.title || props.movies.name;
  const handleClose = props.handleClose;
  const description = props.movies.overview;
  const baseURL = "https://image.tmdb.org/t/p/original" + props.movies.backdrop_path;
  //truncate description
  const truncate = (input) =>
    input?.length > 300 ? `${input.substring(0, 330)}..` : input;
    const truncatenew = (input) =>
      input?.length > 25 ? `${input.substring(0, 23)}.` : input;
  return (
    <div className="main">
      <header
        className="main__img"
        style={{
          backgroundImage: `url(${baseURL})`,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: " center center",
          color: "white",
          width: "60%",
          border: 0,
        }}
      >
        <h3>{truncatenew(titles)}</h3>
        <p>{truncate(description)}</p>
        <button onClick={handleClose}>
          <h2>X</h2>
        </button>
      </header>
    </div>
  );
}
export default Dialogb;
