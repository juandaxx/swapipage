import React from 'react';
import './App.css';
import './index.css';
import Home from './views/Home/Home.js';
import NavTab from './components/Tab/NavTab'


class App extends React.Component {
  render() {
    return (
      <div>
        <NavTab>
          <Home />
        </NavTab>
      </div>
    )
  }
}

export default App;