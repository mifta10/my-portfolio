import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/about">
              <About></About>
          </Route>
          <Route path="/projects">
              <Projects></Projects>
          </Route>
          <Route path="/blogs">
              <Blogs></Blogs>
          </Route>
          <Route path="/contacts">
              <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
