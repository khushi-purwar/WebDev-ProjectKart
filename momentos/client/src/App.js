import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions/';
import Dashboard from './components/Dashboard';

const Landing = () => <h1>Landing</h1>

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
          </Fragment>
        </BrowserRouter>
      </div>

    );
  }
}

export default connect(null, actions)(App);
