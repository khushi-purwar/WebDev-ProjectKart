
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// ****************************render from here********************************************************************************** 

export default class App extends Component {
  pageSize = 9;
  state = { progress: 0 }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
          <div>
      <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<NewsComponent setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category='general' />} />
            <Route exact path="/general" element={<NewsComponent setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category='general' />} />
            <Route exact path="/entertainment" element={<NewsComponent setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category='entertainment' />} />
            <Route exact path="/health" element={<NewsComponent setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category='health' />} />
            <Route exact path="/business" element={<NewsComponent setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category='business' />} />
            <Route exact path="/science" element={<NewsComponent setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category='science' />} />
            <Route exact path="/sports" element={<NewsComponent setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category='sports' />} />
            <Route exact path="/technology" element={<NewsComponent setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category='technology' />} />
          </Routes>
      </Router>
        </div>
    )
  }
}

