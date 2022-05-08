import React, {Component} from 'react';
import './App.css';
import Main from '../component/Main';
import Sidebar from '../component/Sidebar';


class App extends Component {

  render() {     
    
    return (
      <div className="App">        
        <Sidebar  />
        <Main />
      </div>
    );

  }
  
  
}

export default App;
