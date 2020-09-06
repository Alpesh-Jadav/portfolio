import React from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
        <Route path="/project">
          <div className="app">
           
           <Project />
            
          </div>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
