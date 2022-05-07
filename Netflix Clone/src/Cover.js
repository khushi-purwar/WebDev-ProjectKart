import React, { Component } from "react";
import Navbar from './Navbar'
import axios from "./axios";
import "./Cover.css";
class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: props.fetchdata,
      banners: [],
    };
  }
  async componentDidMount() {
    const req = await axios.get(this.state.banner);
    const data = req.data.results;
    const dataz = data[Math.floor(Math.random() * 20)];
    this.setState({
      banners: dataz,
    });
  }
  render() {
    //reduce the overview with truncate
    const truncate = (input) =>
      input?.length > 300 ? `${input.substring(0, 254)}...` : input;
    const baseURL =
      "https://image.tmdb.org/t/p/original" + this.state.banners.backdrop_path;
    return (
      <div>

        <header
          className="banner"
          style={{
            backgroundImage: `url(${baseURL})`,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backgroundBlendMode: "overlay",
            backgroundSize: "cover",
            backgroundPosition: " top center",
            color: "white",
          }}
        > <Navbar />
          <h1 className="banner__name">
            {this.state.banners.original_name ||
              this.state.banners.original_title ||
              this.state.banners.name ||
              this.state.banners.title}
          </h1>
          <button>Play</button> <button>My List</button>
          <p className="banner__overview">
            {truncate(this.state.banners.overview)}
          </p>
        </header>
      </div>
    );
  }
}
export default Cover;
