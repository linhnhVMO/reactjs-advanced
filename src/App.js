import React from 'react';
import './App.css';
import RandomApp from './pages/RandomApp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import TodoApp from './pages/TodoApp';


function App() {
  return (
    <>
        <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/random-app' exact component={RandomApp} />
          <Route path='/todolist-app' exact component={TodoApp} />

        </Switch>

      </Router>
    </>
  );
}

export default App;
