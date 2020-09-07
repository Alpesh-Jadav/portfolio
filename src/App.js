import React from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Project from './Project';
import Resume from './Resume';
import About from './About';

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <div className="app">
            <Header />
            <Body />
          </div>
        </Route>
        <Route exact path="/projects">
          <div className="app">
          <Header />
           <Project />
            
          </div>
        </Route>
        <Route exact path="/resume">
          <div className="app">
          <Header />
           <Resume />
            
          </div>
        </Route>
        <Route exact path="/about">
          <div className="app">
           
           <About />
            
          </div>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
