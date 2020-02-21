import React from 'react';
import './App.css';
import './index.css';
import Home from './views/Home/Home.js';
// import FetchData from './actions/FetchData';


class App extends React.Component {
  render() {
    return (
      <div>
          <Home />
      </div>
    )
  }
}

export default App;