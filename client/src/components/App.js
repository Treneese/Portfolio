
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Header from './Header';
import Skills from './Skills';
import About from './About';
import Border from './Border';
import BlogList from './BlogList';
import './App.css';

function App() {
  return (
    <Router>
    <div className='App'>
      <Border/>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/blogs" component={BlogList} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Border/>
    </div>
  </Router>
  );
}



export default App;
