import React from 'react';
import './App.css';
import './index.css';
import Home from './views/Home/Home.js';
import Tab from './components/Tab/Tab';
import Alert from './components/Alert/Alert';
import ProgressLinearBar from './components/ProgressLinearBar/ProgressLinearBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Tab/>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/alert" exact component={Alert} />
            <Route path="/progress" exact component={ProgressLinearBar} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;