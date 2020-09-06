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
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

export default App;
