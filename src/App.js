import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import home from './components/pages/Home'
import Project from './components/pages/Projects'
import About from './components/pages/About'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/personalwebsite' exact component={home}/>
        <Route path='/personalwebsite/projects' exact component={Project}/>
        <Route path='/personalwebsite/about' exact component={About}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
