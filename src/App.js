import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/homepage/Home';

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <h1>checkout</h1>
          </Route>
          <Route path='/login'>
            <h1>login page</h1>
          </Route>
          {/* This is a default route */}
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
