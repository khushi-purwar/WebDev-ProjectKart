import React, { Component } from "react";
import axios from "./axios";
import "./Rows.css";
import InfoIcon from "@material-ui/icons/Info";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import YouTube from "react-youtube";
import Dialog from "@material-ui/core/Dialog";
import Dialogb from "./Dialogb";
class Rows extends Component {
  constructor(props) {
    super(props);
    const fetchdata =props.fetchdata ;
    const title = props.title;
    const itsbig = props.itsbig
    this.state = {
      row: fetchdata,
      rows: [],
      title: title,
      itsbig: itsbig,
      videosid: "",
      open: false,
      moviedetails: [],
    };
  }


 async componentDidMount() {
    const req = await axios.get(this.state.row);
    const data = req.data.results;
    this.setState({
      rows: data,
    });
  }
  handleClickOpen = (item) => {
    this.setState({ moviedetails: item });
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  playb = (item) => {
    if (this.state.videosid) {
      this.setState({
        videosid: "",
      });
    } else {
      const url = item.name || item.original_name || item.title || "";
      const movieTrailer = require("movie-trailer");
       movieTrailer(url)
        .then((url) => {
          const urlid = new URL(url).searchParams.get("v");
          this.setState({
            videosid: urlid,
          });
        })
        .catch('');
    }
  }
  imgclick = (e) =>{
    if (this.state.videosid) {
      this.setState({
        videosid: "",
      });
    }
  }

  render() {
    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const baseURL = "https://image.tmdb.org/t/p/w500";
    return (
      <div>
        <h3 className="body__tittle">{this.state.title}</h3>
        <div className="rows">
          {this.state.rows.map((item) => {
            return (
              <div
                key={item.id}
                className={
                  this.state.itsbig ? "Row__content" : "Row__content--small"
                }
              >
                {item.backdrop_path !== null && (
                  <img
                    src={
                      this.state.itsbig
                        ? baseURL + item.poster_path
                        : baseURL + item.backdrop_path
                    }
                    alt="img"
                    onClick={this.imgclick}
                  />
                )}
                <div
                  className={this.state.itsbig ? "Row__button" : "Row_button"}
                >
                  <button
                    onClick={() => {
                      this.playb(item);
                    }}
                  >
                    <PlayArrowIcon fontSize="large" />
                  </button>
                  <button
                    onClick={() => {
                      this.handleClickOpen(item);
                    }}
                    className="info"
                  >
                    <InfoIcon />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {this.state.videosid !== "" && (
          <YouTube videoId={this.state.videosid} opts={opts} />
        )}
        <div>
          <Dialog
            fullWidth={true}
            maxWidth="xl"
            open={this.state.open}
            onClose={this.handleClose}
            scroll="body"
          >
            <Dialogb
              class="dialogb"
              movies={this.state.moviedetails}
              handleClose={this.handleClose}
              color="primary"
            />
          </Dialog>
        </div>
      </div>
    );
  }
}
export default Rows;
