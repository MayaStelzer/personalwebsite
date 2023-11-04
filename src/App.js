import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import home from './components/pages/Home'
import Project from './components/pages/Projects'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={home}/>
        <Route path='/projects' exact component={Project}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
