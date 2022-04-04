import React, { Component } from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

// Also you might wanna encapsulate <App /> with ApolloProvider to allow for any query anywhere in this application
// uri should be localhost in this case

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board 
        nrows={4}
        ncols={9}
        chanceLightStartsOn={0.36}
        />
      </div>
    );
  }
}

export default App;
