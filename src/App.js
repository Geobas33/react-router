import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Component/Home';
import History from './Component/History';
import './App.css'

class App extends Component {
    render() {
        return (
          
            <BrowserRouter>
              <div>
                <NavLink exact to="/" activeClassName="selected"> Accueil </NavLink>
                <NavLink to="/notre-histoire" activeClassName="selected"> Histoire </NavLink>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/notre-histoire" component={History} /> 
              </Switch>
              </div>
            </BrowserRouter>
              
        );
    }
}

export default App;