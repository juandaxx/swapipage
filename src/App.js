import React from 'react';
import './App.css';
import './index.css';
import Home from './views/Home/Home.js';
import { Contact } from './views/Contact/Contact';
import { Galery } from './views/Galery/Galery';
import Tab from './components/Tab/Tab';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Tab/>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/galery" exact component={Galery} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;